import * as THREE from "three";
import {
  ASPECT_RATIO,
  COLOR_BG,
  DEPTH_BOSS,
  DEPTH_ENEMIES,
  DEPTH_ITEMS,
  DEPTH_PARTICLES,
  DEPTH_PLAYER,
  DEPTH_PROJECTILES,
  ENEMY_POOL_SIZE,
  GAME_HEIGHT,
  GAME_WIDTH,
  ITEM_POOL_SIZE,
  PARTICLE_POOL_SIZE,
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  PROJECTILE_HEIGHT,
  PROJECTILE_POOL_SIZE,
  PROJECTILE_WIDTH,
  RENDER_TARGET_HEIGHT,
  RENDER_TARGET_WIDTH,
  SCOUT_HEIGHT,
  SCOUT_WIDTH,
  THEME_PALETTES,
  TITAN_WARDEN_HEIGHT,
  TITAN_WARDEN_WIDTH,
} from "../core/Constants";
import type { Game } from "../core/Game";
import type { EnemyArchetype, ItemType, SkinId, ThemeId } from "../core/Types";
import { EnvironmentManager } from "./EnvironmentManager";
import { LCDShader } from "../shaders/LCDShader";
import { TextureGenerator } from "./TextureGenerator";

export class GameRenderer {
  readonly scene: THREE.Scene;
  readonly camera: THREE.OrthographicCamera;
  readonly renderer: THREE.WebGLRenderer;

  private readonly playerSprite: THREE.Sprite;
  private readonly shieldSprite: THREE.Sprite;
  private readonly projectileSprites: THREE.Sprite[] = [];
  private readonly enemySprites: THREE.Sprite[] = [];
  private readonly particleSprites: THREE.Sprite[] = [];
  private readonly itemSprites: THREE.Sprite[] = [];
  private readonly environment: EnvironmentManager;

  private readonly playerMaterials: Record<SkinId, THREE.SpriteMaterial>;
  private readonly projPlayerMat: THREE.SpriteMaterial;
  private readonly projEnemyMat: THREE.SpriteMaterial;
  private readonly enemyMaterials: Record<EnemyArchetype, THREE.SpriteMaterial>;
  private readonly itemMaterials: Record<ItemType, THREE.SpriteMaterial>;
  private readonly bossSprite: THREE.Sprite;
  private readonly bossMat: THREE.SpriteMaterial;
  private readonly bossEnragedMat: THREE.SpriteMaterial;

  // Offscreen low-resolution render targets & LCD post-processing
  private readonly renderTargetA: THREE.WebGLRenderTarget;
  private readonly renderTargetB: THREE.WebGLRenderTarget;
  private currentRenderTarget: THREE.WebGLRenderTarget;
  private previousRenderTarget: THREE.WebGLRenderTarget;
  private readonly postScene: THREE.Scene;
  private readonly postCamera: THREE.OrthographicCamera;
  private readonly postMaterial: THREE.ShaderMaterial;
  private readonly postQuad: THREE.Mesh;

  // Camera Shake
  private shakeIntensity = 0;
  private shakeDuration = 0;
  private shakeTimer = 0;

  constructor(container: HTMLElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(COLOR_BG);

    // Orthographic camera centered at (GAME_WIDTH / 2, GAME_HEIGHT / 2)
    const halfW = GAME_WIDTH / 2;
    const halfH = GAME_HEIGHT / 2;
    this.camera = new THREE.OrthographicCamera(
      -halfW,
      halfW,
      halfH,
      -halfH,
      0.1,
      100
    );
    this.camera.position.set(halfW, halfH, 20);
    this.camera.lookAt(halfW, halfH, 0);

    // WebGL renderer with nearest-neighbor presentation
    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(1);
    this.renderer.setClearColor(COLOR_BG, 1);
    container.appendChild(this.renderer.domElement);

    // 2.5D Multi-layer Parallax Environment (Stars, Planet, Asteroids, Debris)
    this.environment = new EnvironmentManager(this.scene);

    // Texture generation for Player Skins
    this.playerMaterials = {
      alpha: new THREE.SpriteMaterial({ map: TextureGenerator.createPlayerTexture("alpha"), transparent: true }),
      valkyrie: new THREE.SpriteMaterial({ map: TextureGenerator.createPlayerTexture("valkyrie"), transparent: true }),
      phantom: new THREE.SpriteMaterial({ map: TextureGenerator.createPlayerTexture("phantom"), transparent: true }),
      solaris: new THREE.SpriteMaterial({ map: TextureGenerator.createPlayerTexture("solaris"), transparent: true }),
    };

    // Player sprite
    this.playerSprite = new THREE.Sprite(this.playerMaterials.alpha);
    this.playerSprite.scale.set(PLAYER_WIDTH, PLAYER_HEIGHT, 1);
    this.playerSprite.position.set(0, 0, DEPTH_PLAYER);
    this.scene.add(this.playerSprite);

    // Shield barrier aura sprite
    const shieldTexture = TextureGenerator.createShieldAuraTexture();
    const shieldMat = new THREE.SpriteMaterial({ map: shieldTexture, transparent: true });
    this.shieldSprite = new THREE.Sprite(shieldMat);
    this.shieldSprite.scale.set(16, 16, 1);
    this.shieldSprite.visible = false;
    this.scene.add(this.shieldSprite);

    // Projectile materials & sprite pool
    const projTexture = TextureGenerator.createProjectileTexture();
    const enemyProjTexture = TextureGenerator.createEnemyProjectileTexture();
    this.projPlayerMat = new THREE.SpriteMaterial({ map: projTexture, transparent: true });
    this.projEnemyMat = new THREE.SpriteMaterial({ map: enemyProjTexture, transparent: true });
    for (let i = 0; i < PROJECTILE_POOL_SIZE; i++) {
      const sprite = new THREE.Sprite(this.projPlayerMat);
      sprite.scale.set(PROJECTILE_WIDTH, PROJECTILE_HEIGHT, 1);
      sprite.visible = false;
      this.projectileSprites.push(sprite);
      this.scene.add(sprite);
    }

    // Enemy materials & sprite pool
    this.enemyMaterials = {
      scout: new THREE.SpriteMaterial({ map: TextureGenerator.createScoutTexture(), transparent: true }),
      weaver: new THREE.SpriteMaterial({ map: TextureGenerator.createWeaverTexture(), transparent: true }),
      swooper: new THREE.SpriteMaterial({ map: TextureGenerator.createSwooperTexture(), transparent: true }),
      chaser: new THREE.SpriteMaterial({ map: TextureGenerator.createChaserTexture(), transparent: true }),
    };
    for (let i = 0; i < ENEMY_POOL_SIZE; i++) {
      const sprite = new THREE.Sprite(this.enemyMaterials.scout);
      sprite.scale.set(SCOUT_WIDTH, SCOUT_HEIGHT, 1);
      sprite.visible = false;
      this.enemySprites.push(sprite);
      this.scene.add(sprite);
    }

    // Collectible Item materials & sprite pool
    this.itemMaterials = {
      coin: new THREE.SpriteMaterial({ map: TextureGenerator.createCoinTexture(), transparent: true }),
      powerup_spread: new THREE.SpriteMaterial({ map: TextureGenerator.createPowerupTexture("spread"), transparent: true }),
      powerup_rapid: new THREE.SpriteMaterial({ map: TextureGenerator.createPowerupTexture("rapid"), transparent: true }),
      powerup_shield: new THREE.SpriteMaterial({ map: TextureGenerator.createPowerupTexture("shield"), transparent: true }),
      powerup_bomb: new THREE.SpriteMaterial({ map: TextureGenerator.createPowerupTexture("bomb"), transparent: true }),
    };
    for (let i = 0; i < ITEM_POOL_SIZE; i++) {
      const sprite = new THREE.Sprite(this.itemMaterials.coin);
      sprite.scale.set(6, 6, 1);
      sprite.visible = false;
      this.itemSprites.push(sprite);
      this.scene.add(sprite);
    }

    // Particle sprite pool
    const particleTexture = TextureGenerator.createParticleTexture();
    const particleMat = new THREE.SpriteMaterial({ map: particleTexture, transparent: true });
    for (let i = 0; i < PARTICLE_POOL_SIZE; i++) {
      const sprite = new THREE.Sprite(particleMat.clone());
      sprite.scale.set(2, 2, 1);
      sprite.visible = false;
      this.particleSprites.push(sprite);
      this.scene.add(sprite);
    }

    // Boss materials & sprite
    const bossTexture = TextureGenerator.createTitanWardenTexture();
    const bossEnragedTexture = TextureGenerator.createTitanWardenTexture(true);
    this.bossMat = new THREE.SpriteMaterial({ map: bossTexture, transparent: true });
    this.bossEnragedMat = new THREE.SpriteMaterial({ map: bossEnragedTexture, transparent: true });
    this.bossSprite = new THREE.Sprite(this.bossMat);
    this.bossSprite.scale.set(TITAN_WARDEN_WIDTH, TITAN_WARDEN_HEIGHT, 1);
    this.bossSprite.position.set(0, 0, DEPTH_BOSS);
    this.bossSprite.visible = false;
    this.scene.add(this.bossSprite);

    // Initialize low-resolution offscreen render targets for LCD post-processing
    const renderTargetParams: THREE.RenderTargetOptions = {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
      generateMipmaps: false,
    };
    this.renderTargetA = new THREE.WebGLRenderTarget(
      RENDER_TARGET_WIDTH,
      RENDER_TARGET_HEIGHT,
      renderTargetParams
    );
    this.renderTargetB = new THREE.WebGLRenderTarget(
      RENDER_TARGET_WIDTH,
      RENDER_TARGET_HEIGHT,
      renderTargetParams
    );
    this.currentRenderTarget = this.renderTargetA;
    this.previousRenderTarget = this.renderTargetB;

    // Fullscreen quad for LCD post-processing pass
    this.postScene = new THREE.Scene();
    this.postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.postMaterial = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        tPrevious: { value: null },
        uResolution: { value: new THREE.Vector2(RENDER_TARGET_WIDTH, RENDER_TARGET_HEIGHT) },
        uGhosting: { value: LCDShader.uniforms.uGhosting.value },
        uGridIntensity: { value: LCDShader.uniforms.uGridIntensity.value },
        uVignette: { value: LCDShader.uniforms.uVignette.value },
        uColorInk: { value: new THREE.Color(LCDShader.uniforms.uColorInk.value) },
        uColorDark: { value: new THREE.Color(LCDShader.uniforms.uColorDark.value) },
        uColorMid: { value: new THREE.Color(LCDShader.uniforms.uColorMid.value) },
        uColorLight: { value: new THREE.Color(LCDShader.uniforms.uColorLight.value) },
      },
      vertexShader: LCDShader.vertexShader,
      fragmentShader: LCDShader.fragmentShader,
      depthTest: false,
      depthWrite: false,
    });
    this.postQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.postMaterial);
    this.postScene.add(this.postQuad);
  }

  setTheme(themeId: ThemeId): void {
    const palette = THEME_PALETTES[themeId] || THEME_PALETTES.verdant;
    this.postMaterial.uniforms.uColorInk.value.setHex(palette.ink);
    this.postMaterial.uniforms.uColorDark.value.setHex(palette.dark);
    this.postMaterial.uniforms.uColorMid.value.setHex(palette.mid);
    this.postMaterial.uniforms.uColorLight.value.setHex(palette.light);
    this.renderer.setClearColor(palette.bg, 1);
    this.scene.background = new THREE.Color(palette.bg);
    this.environment.setTheme(themeId);
  }

  triggerShake(intensity: number, duration: number): void {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
    this.shakeDuration = Math.max(this.shakeDuration, duration);
    this.shakeTimer = this.shakeDuration;
  }

  resize(): void {
    const windowWidth = Math.max(1, window.innerWidth);
    const windowHeight = Math.max(1, window.innerHeight);
    const windowAspect = windowWidth / windowHeight;

    let targetWidth: number;
    let targetHeight: number;

    if (windowAspect > ASPECT_RATIO) {
      targetHeight = windowHeight;
      targetWidth = windowHeight * ASPECT_RATIO;
    } else {
      targetWidth = windowWidth;
      targetHeight = windowWidth / ASPECT_RATIO;
    }

    this.renderer.setSize(targetWidth, targetHeight, false);
    this.renderer.domElement.style.width = `${Math.floor(targetWidth)}px`;
    this.renderer.domElement.style.height = `${Math.floor(targetHeight)}px`;
  }

  render(game: Game, dt: number): void {
    // Camera shake calculation
    const halfW = GAME_WIDTH / 2;
    const halfH = GAME_HEIGHT / 2;
    if (this.shakeTimer > 0) {
      this.shakeTimer -= dt;
      const progress = Math.max(0, this.shakeTimer / this.shakeDuration);
      const curIntensity = this.shakeIntensity * progress;
      const ox = (Math.random() * 2 - 1) * curIntensity;
      const oy = (Math.random() * 2 - 1) * curIntensity;
      this.camera.position.set(halfW + ox, halfH + oy, 20);
    } else {
      this.shakeIntensity = 0;
      this.shakeDuration = 0;
      this.camera.position.set(halfW, halfH, 20);
    }

    // Update 2.5D Parallax Environment with active stage
    this.environment.setStage(game.getCurrentStage());
    this.environment.update(dt);

    const isPlaying = game.getState() === "PLAYING" || game.getState() === "PAUSED";

    // Synchronize Player sprite
    const player = game.getPlayer();
    if (player.active && player.visible && isPlaying) {
      this.playerSprite.visible = true;
      this.playerSprite.material = this.playerMaterials[player.currentSkin] || this.playerMaterials.alpha;
      this.playerSprite.position.set(player.position.x, player.position.y, DEPTH_PLAYER);

      // Synchronize Shield barrier halo
      if (player.hasShield) {
        this.shieldSprite.visible = true;
        this.shieldSprite.position.set(player.position.x, player.position.y, DEPTH_PLAYER + 0.1);
        this.shieldSprite.material.rotation += dt * 3.0;
      } else {
        this.shieldSprite.visible = false;
      }
    } else {
      this.playerSprite.visible = false;
      this.shieldSprite.visible = false;
    }

    // Synchronize Projectiles
    const projectiles = game.getProjectiles().getAll();
    for (let i = 0; i < projectiles.length; i++) {
      const proj = projectiles[i];
      const sprite = this.projectileSprites[i];
      if (proj.active && isPlaying) {
        sprite.visible = true;
        sprite.position.set(proj.position.x, proj.position.y, DEPTH_PROJECTILES);
        sprite.material = proj.owner === "player" ? this.projPlayerMat : this.projEnemyMat;
      } else {
        sprite.visible = false;
      }
    }

    // Synchronize Enemies
    const enemies = game.getEnemies().getAll();
    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
      const sprite = this.enemySprites[i];
      if (enemy.active && isPlaying) {
        sprite.visible = true;
        sprite.position.set(enemy.position.x, enemy.position.y, DEPTH_ENEMIES);
        sprite.material = this.enemyMaterials[enemy.type];
        sprite.scale.set(enemy.width, enemy.height, 1);
      } else {
        sprite.visible = false;
      }
    }

    // Synchronize Collectibles & Powerups
    const items = game.getItems().getAll();
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      const sprite = this.itemSprites[i];
      if (it.active && isPlaying) {
        sprite.visible = it.visible;
        sprite.position.set(it.position.x, it.position.y, DEPTH_ITEMS);
        sprite.material = this.itemMaterials[it.type] || this.itemMaterials.coin;
        sprite.scale.set(it.width, it.height, 1);
      } else {
        sprite.visible = false;
      }
    }

    // Synchronize Boss
    const boss = game.getBoss();
    if (boss.active && isPlaying) {
      this.bossSprite.visible = true;
      this.bossSprite.position.set(boss.position.x, boss.position.y, DEPTH_BOSS);
      if (boss.flashTimer > 0) {
        this.bossSprite.material = this.bossEnragedMat;
      } else {
        this.bossSprite.material = boss.isEnraged ? this.bossEnragedMat : this.bossMat;
      }
      this.bossSprite.scale.set(boss.width, boss.height, 1);
    } else {
      this.bossSprite.visible = false;
    }

    // Synchronize Particles
    const particles = game.getParticles().getAll();
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const sprite = this.particleSprites[i];
      if (p.active) {
        sprite.visible = true;
        sprite.position.set(p.x, p.y, DEPTH_PARTICLES);
        const s = Math.max(0.5, p.size * p.getNormalizedLife());
        sprite.scale.set(s, s, 1);
      } else {
        sprite.visible = false;
      }
    }

    // 1. Render gameplay scene to low-resolution offscreen target
    this.renderer.setRenderTarget(this.currentRenderTarget);
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);

    // 2. Render LCD post-processing pass directly to screen
    this.renderer.setRenderTarget(null);
    this.postMaterial.uniforms.tDiffuse.value = this.currentRenderTarget.texture;
    this.postMaterial.uniforms.tPrevious.value = this.previousRenderTarget.texture;
    this.renderer.render(this.postScene, this.postCamera);

    // 3. Ping-pong swap for liquid-crystal response ghosting
    const temp = this.currentRenderTarget;
    this.currentRenderTarget = this.previousRenderTarget;
    this.previousRenderTarget = temp;
  }

  dispose(): void {
    this.renderTargetA.dispose();
    this.renderTargetB.dispose();
    this.environment.dispose();
    for (const key of Object.keys(this.playerMaterials) as SkinId[]) {
      this.playerMaterials[key].dispose();
    }
    this.shieldSprite.material.dispose();
    this.projPlayerMat.dispose();
    this.projEnemyMat.dispose();
    for (const key of Object.keys(this.enemyMaterials) as EnemyArchetype[]) {
      this.enemyMaterials[key].dispose();
    }
    for (const key of Object.keys(this.itemMaterials) as ItemType[]) {
      this.itemMaterials[key].dispose();
    }
    this.bossMat.dispose();
    this.bossEnragedMat.dispose();
    this.postMaterial.dispose();
    this.postQuad.geometry.dispose();
  }
}
