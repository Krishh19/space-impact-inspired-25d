import { AudioManager } from "../audio/AudioManager";
import {
  COIN_DROP_CHANCE,
  HIT_STOP_ENEMY_DESTROY,
  HIT_STOP_PLAYER_DAMAGE,
  MAX_FRAME_DELTA,
  POWERUP_BOMB_DAMAGE,
  POWERUP_DROP_CHANCE,
  SHAKE_ENEMY_DESTROY_DURATION,
  SHAKE_ENEMY_DESTROY_INTENSITY,
  SHAKE_PLAYER_DAMAGE_DURATION,
  SHAKE_PLAYER_DAMAGE_INTENSITY,
} from "./Constants";
import type { BehaviorContext, CombatStats, EnemyArchetype, GameState, ItemType, PowerupType, ThemeId } from "./Types";
import { CollisionSystem } from "../gameplay/CollisionSystem";
import { EnemyPool } from "../gameplay/EnemyPool";
import { ItemPool } from "../gameplay/ItemPool";
import { ParticlePool } from "../gameplay/ParticlePool";
import { Player } from "../gameplay/Player";
import { ProjectilePool } from "../gameplay/ProjectilePool";
import { TitanWarden } from "../gameplay/boss/TitanWarden";
import { LevelDirector, type LevelEventDispatcher } from "../levels/LevelDirector";
import { EndlessDirector } from "../levels/EndlessDirector";
import { ScoreSystem } from "../systems/ScoreSystem";
import { SettingsManager } from "../systems/SettingsManager";
import { Spawner } from "../systems/Spawner";
import type { InputManager } from "../systems/InputManager";

export class Game {
  private state: GameState = "TITLE";
  private readonly input: InputManager;
  private readonly player: Player;
  private readonly projectiles: ProjectilePool;
  private readonly enemies: EnemyPool;
  private readonly items: ItemPool;
  private readonly boss: TitanWarden;
  private readonly particles: ParticlePool;
  private readonly collisions: CollisionSystem;
  private readonly spawner: Spawner;
  private readonly scoreSystem: ScoreSystem;
  private readonly levelDirector: LevelDirector;
  private readonly endlessDirector: EndlessDirector;
  private readonly audio: AudioManager;
  private readonly settings: SettingsManager;

  private accumulator = 0;
  private readonly fixedDt = 1 / 60;
  private hitStopTimer = 0;
  private timeScale = 1.0;

  private levelDispatcher?: LevelEventDispatcher;
  private readonly behaviorContext: BehaviorContext;

  // Telemetry counters
  private shotsFired = 0;
  private shotsHit = 0;
  private enemiesDestroyed = 0;
  private stageElapsedTime = 0;
  private coinsCollected = 0;

  private onShakeCallback?: (intensity: number, duration: number) => void;
  private onThemeChangeCallback?: (theme: ThemeId) => void;

  constructor(input: InputManager) {
    this.input = input;
    this.player = new Player();
    this.projectiles = new ProjectilePool();
    this.enemies = new EnemyPool();
    this.items = new ItemPool();
    this.boss = new TitanWarden();
    this.particles = new ParticlePool();
    this.collisions = new CollisionSystem();
    this.spawner = new Spawner();
    this.scoreSystem = new ScoreSystem();
    this.levelDirector = new LevelDirector();
    this.endlessDirector = new EndlessDirector();
    this.audio = new AudioManager();
    this.settings = new SettingsManager();

    this.settings.subscribe((s) => {
      this.audio.setMuted(s.muted);
      this.audio.setVolume(s.volume);
      this.player.applySkin(s.selectedSkin);
      this.onThemeChangeCallback?.(s.theme);
    });

    this.behaviorContext = {
      playerPosition: this.player.position,
      spawnEnemyProjectile: (x: number, y: number, vx: number, vy: number) => {
        const proj = this.projectiles.acquire(x, y, vx, vy, "enemy");
        if (proj) {
          this.audio.playEnemyShoot();
        }
      },
    };
  }

  setLevelDispatcher(dispatcher: LevelEventDispatcher): void {
    this.levelDispatcher = dispatcher;
    dispatcher.spawnBoss = (bossId, name, hp) => {
      this.spawnBoss(bossId, name, hp);
    };
  }

  setOnThemeChange(callback: (theme: ThemeId) => void): void {
    this.onThemeChangeCallback = callback;
    callback(this.settings.getSettings().theme);
  }

  spawnBoss(_bossId: string, _name: string, hp: number): void {
    this.boss.spawn(180, 45, hp, {
      onDefeated: () => {
        const s = this.settings.getSettings();
        const scoreBonus = s.difficulty === "HARD" ? 7500 : 5000;
        this.scoreSystem.addScore(scoreBonus);

        // Unlock next stage if in Campaign
        if (s.gameMode === "CAMPAIGN" && s.selectedStage < 3) {
          this.settings.unlockNextStage(s.selectedStage + 1);
        }

        this.state = "VICTORY";
        this.audio.playStageClear();
      },
      onSurgeTelegraph: () => {
        this.audio.playBossSurge();
        this.triggerScreenShake(0.8, 0.4);
      },
      onBossShoot: () => {
        this.audio.playBossShoot();
      },
      onHeavyExplosion: () => {
        this.audio.playHeavyExplosion();
      },
    });
  }

  triggerScreenShake(intensity: number, duration: number): void {
    const mode = this.settings.getSettings().screenShake;
    if (mode === "off") return;
    const mult = mode === "reduced" ? 0.35 : 1.0;
    this.onShakeCallback?.(intensity * mult, duration * mult);
  }

  getSettings(): SettingsManager {
    return this.settings;
  }

  getCombatStats(): CombatStats {
    const accuracy = this.shotsFired > 0 ? this.shotsHit / this.shotsFired : 0;
    const score = this.getScore();
    let rank: "S" | "A" | "B" | "C" = "C";
    if (score >= 6000 && accuracy >= 0.4) {
      rank = "S";
    } else if (score >= 4500 && accuracy >= 0.25) {
      rank = "A";
    } else if (score >= 2500) {
      rank = "B";
    }

    return {
      shotsFired: this.shotsFired,
      shotsHit: this.shotsHit,
      enemiesDestroyed: this.enemiesDestroyed,
      totalEnemiesSpawned: Math.max(this.enemiesDestroyed, 15),
      elapsedTime: this.stageElapsedTime,
      rank,
      coinsCollected: this.coinsCollected,
      waveReached: this.endlessDirector.getWave(),
    };
  }

  pauseGame(): void {
    if (this.state === "PLAYING") {
      this.state = "PAUSED";
      this.audio.playPause();
    }
  }

  resumeGame(): void {
    if (this.state === "PAUSED") {
      this.state = "PLAYING";
      this.audio.playUnpause();
    }
  }

  togglePause(): void {
    if (this.state === "PLAYING") {
      this.pauseGame();
    } else if (this.state === "PAUSED") {
      this.resumeGame();
    }
  }

  getState(): GameState {
    return this.state;
  }

  getPlayer(): Player {
    return this.player;
  }

  getProjectiles(): ProjectilePool {
    return this.projectiles;
  }

  getEnemies(): EnemyPool {
    return this.enemies;
  }

  getItems(): ItemPool {
    return this.items;
  }

  getBoss(): TitanWarden {
    return this.boss;
  }

  getScore(): number {
    return this.scoreSystem.getScore();
  }

  getHighScore(): number {
    return this.scoreSystem.getHighScore();
  }

  getParticles(): ParticlePool {
    return this.particles;
  }

  getAudio(): AudioManager {
    return this.audio;
  }

  getLevelDirector(): LevelDirector {
    return this.levelDirector;
  }

  getEndlessDirector(): EndlessDirector {
    return this.endlessDirector;
  }

  getCoinsCollected(): number {
    return this.coinsCollected;
  }

  getCurrentStage(): number {
    const s = this.settings.getSettings();
    if (s.gameMode === "ENDLESS") {
      const wave = this.endlessDirector.getWave();
      if (wave >= 10) return 3;
      if (wave >= 5) return 2;
      return 1;
    }
    return s.selectedStage || 1;
  }

  setOnShake(callback: (intensity: number, duration: number) => void): void {
    this.onShakeCallback = callback;
  }

  triggerHitStop(duration: number): void {
    this.hitStopTimer = Math.max(this.hitStopTimer, duration);
  }

  updateFrame(frameDelta: number): void {
    const clamped = Math.min(frameDelta * this.timeScale, MAX_FRAME_DELTA);
    this.accumulator += clamped;

    while (this.accumulator >= this.fixedDt) {
      this.update(this.fixedDt);
      this.accumulator -= this.fixedDt;
    }
  }

  private update(dt: number): void {
    const inputState = this.input.getState();

    // Unlock audio on active key press
    if (
      inputState.fire ||
      inputState.start ||
      inputState.left ||
      inputState.right ||
      inputState.up ||
      inputState.down
    ) {
      this.audio.unlock();
    }

    // Always update visual particles
    this.particles.update(dt);

    // Hit-stop impact freeze
    if (this.hitStopTimer > 0) {
      this.hitStopTimer -= dt;
      return;
    }

    // State transitions
    if (this.state === "TITLE") {
      if (this.input.consumeAction("start")) {
        this.startGame();
      }
      this.input.clearJustPressed();
      return;
    }

    if (this.state === "PAUSED") {
      if (this.input.consumeAction("pause")) {
        this.resumeGame();
      }
      this.input.clearJustPressed();
      return;
    }

    if (this.state === "GAME_OVER" || this.state === "VICTORY") {
      if (this.input.consumeAction("start")) {
        this.startGame();
      }
      this.input.clearJustPressed();
      return;
    }

    // Toggle pause during active gameplay
    if (this.input.consumeAction("pause")) {
      this.pauseGame();
      this.input.clearJustPressed();
      return;
    }

    this.stageElapsedTime += dt;

    const s = this.settings.getSettings();

    // 1. Level Timeline Director / Endless Director
    if (this.levelDispatcher) {
      if (s.gameMode === "ENDLESS") {
        this.endlessDirector.update(
          dt,
          this.enemies,
          this.levelDispatcher,
          this.audio
        );
      } else {
        this.levelDirector.update(
          dt,
          this.enemies,
          this.levelDispatcher,
          this.audio
        );
      }
    }

    // 2. Player
    const didShoot = this.player.updateWithInput(dt, inputState, this.projectiles);
    if (didShoot) {
      this.shotsFired++;
      this.audio.playShoot();
    }

    // 3. Enemies
    this.enemies.update(dt, this.behaviorContext);

    // 3.2 Collectible Items
    this.items.update(dt);

    // 3.5 Boss
    if (this.boss.active) {
      this.boss.update(
        dt,
        this.behaviorContext,
        (x, y, count) => this.particles.emitExplosion(x, y, count),
        (intensity, duration) => this.triggerScreenShake(intensity, duration)
      );
    }

    // 4. Projectiles
    this.projectiles.update(dt);

    // 5. Collisions
    // Player Projectiles vs Enemies
    this.collisions.checkProjectileEnemyCollisions(
      this.projectiles,
      this.enemies,
      (enemy, _proj, killed) => {
        this.shotsHit++;
        if (killed) {
          this.enemiesDestroyed++;
          const scoreBonus = s.difficulty === "HARD" ? Math.floor(enemy.scoreValue * 1.5) : enemy.scoreValue;
          this.scoreSystem.addScore(scoreBonus);
          this.audio.playExplosion();
          this.particles.emitExplosion(enemy.position.x, enemy.position.y, 10);
          this.triggerHitStop(HIT_STOP_ENEMY_DESTROY);
          this.triggerScreenShake(
            SHAKE_ENEMY_DESTROY_INTENSITY,
            SHAKE_ENEMY_DESTROY_DURATION
          );

          // Drop evaluation
          const roll = Math.random();
          if (roll < COIN_DROP_CHANCE) {
            this.items.acquire(enemy.position.x, enemy.position.y, "coin");
          } else if (roll < COIN_DROP_CHANCE + POWERUP_DROP_CHANCE) {
            const powerups: ItemType[] = [
              "powerup_spread",
              "powerup_rapid",
              "powerup_shield",
              "powerup_bomb",
            ];
            const pType = powerups[Math.floor(Math.random() * powerups.length)];
            this.items.acquire(enemy.position.x, enemy.position.y, pType);
          }
        } else {
          this.audio.playImpact();
          this.particles.emitImpact(enemy.position.x, enemy.position.y, 3);
        }
      }
    );

    // Player vs Collectibles & Powerups
    this.collisions.checkPlayerItemCollisions(this.items, this.player, (item) => {
      if (item.type === "coin") {
        this.coinsCollected++;
        const coinVal = s.difficulty === "HARD" ? 2 : 1;
        this.settings.addCoins(coinVal);
        this.audio.playCoin();
        this.particles.emitImpact(this.player.position.x, this.player.position.y, 4);
      } else {
        this.audio.playPowerup();
        if (item.type === "powerup_spread") {
          this.player.activatePowerup("spread");
          this.triggerPowerupAmbush("spread");
        } else if (item.type === "powerup_rapid") {
          this.player.activatePowerup("rapid");
          this.triggerPowerupAmbush("rapid");
        } else if (item.type === "powerup_shield") {
          this.player.activatePowerup("shield");
          this.triggerPowerupAmbush("shield");
        } else if (item.type === "powerup_bomb") {
          // Detonate EMP Smart Bomb
          this.audio.playEmpBomb();
          this.triggerScreenShake(2.5, 0.4);

          // Clear all enemy projectiles
          const projs = this.projectiles.getAll();
          for (let i = 0; i < projs.length; i++) {
            if (projs[i].active && projs[i].owner === "enemy") {
              this.particles.emitImpact(projs[i].position.x, projs[i].position.y, 2);
              projs[i].destroy();
            }
          }

          // Damage all enemies
          const enms = this.enemies.getAll();
          for (let i = 0; i < enms.length; i++) {
            if (enms[i].active) {
              const killed = enms[i].takeDamage(POWERUP_BOMB_DAMAGE);
              this.particles.emitExplosion(enms[i].position.x, enms[i].position.y, 8);
              if (killed) {
                this.enemiesDestroyed++;
                this.scoreSystem.addScore(enms[i].scoreValue);
              }
            }
          }

          // Damage boss if active
          if (this.boss.active) {
            this.boss.takeDamage(POWERUP_BOMB_DAMAGE);
            this.particles.emitExplosion(this.boss.position.x, this.boss.position.y, 16);
          }

          // Trigger counter-strike patrol ambush
          this.triggerPowerupAmbush("bomb");
        }
      }
    });

    // Enemy Projectiles vs Player
    this.collisions.checkEnemyProjectilePlayerCollisions(
      this.projectiles,
      this.player,
      (_proj, playerKilled) => {
        this.particles.emitExplosion(
          this.player.position.x,
          this.player.position.y,
          12
        );
        this.triggerHitStop(HIT_STOP_PLAYER_DAMAGE);
        this.triggerScreenShake(
          SHAKE_PLAYER_DAMAGE_INTENSITY,
          SHAKE_PLAYER_DAMAGE_DURATION
        );

        if (playerKilled) {
          this.audio.playGameOver();
          this.gameOver();
        } else {
          this.audio.playPlayerHit();
        }
      }
    );

    // Player vs Enemies
    this.collisions.checkPlayerEnemyCollisions(
      this.player,
      this.enemies,
      (enemy, playerKilled) => {
        this.particles.emitExplosion(this.player.position.x, this.player.position.y, 16);
        this.particles.emitExplosion(enemy.position.x, enemy.position.y, 8);
        this.triggerHitStop(HIT_STOP_PLAYER_DAMAGE);
        this.triggerScreenShake(
          SHAKE_PLAYER_DAMAGE_INTENSITY,
          SHAKE_PLAYER_DAMAGE_DURATION
        );

        if (playerKilled) {
          this.audio.playGameOver();
          this.gameOver();
        } else {
          this.audio.playPlayerHit();
        }
      }
    );

    // Player Projectiles vs Boss
    if (this.boss.active) {
      this.collisions.checkProjectileBossCollisions(
        this.projectiles,
        this.boss,
        (_proj, killed) => {
          this.shotsHit++;
          if (killed) {
            this.enemiesDestroyed++;
            this.scoreSystem.addScore(this.boss.scoreValue);
            this.audio.playHeavyExplosion();
            this.triggerHitStop(0.08);
            this.triggerScreenShake(2.5, 0.35);
          } else {
            this.audio.playBossHit();
            this.particles.emitImpact(this.boss.position.x - 14, this.boss.position.y, 4);
            this.triggerHitStop(0.02);
            this.triggerScreenShake(0.6, 0.08);
          }
        }
      );
    }

    // Player vs Boss Hull
    if (this.boss.active) {
      this.collisions.checkPlayerBossCollision(
        this.player,
        this.boss,
        (playerKilled) => {
          this.particles.emitExplosion(this.player.position.x, this.player.position.y, 16);
          this.triggerHitStop(HIT_STOP_PLAYER_DAMAGE);
          this.triggerScreenShake(
            SHAKE_PLAYER_DAMAGE_INTENSITY,
            SHAKE_PLAYER_DAMAGE_DURATION
          );

          if (playerKilled) {
            this.audio.playGameOver();
            this.gameOver();
          } else {
            this.audio.playPlayerHit();
          }
        }
      );
    }

    // Clear frame-specific input triggers
    this.input.clearJustPressed();
  }

  startGame(): void {
    this.audio.unlock();
    this.player.reset();
    this.projectiles.clear();
    this.enemies.clear();
    this.items.clear();
    this.boss.destroy();
    this.particles.clear();
    this.shotsFired = 0;
    this.shotsHit = 0;
    this.enemiesDestroyed = 0;
    this.coinsCollected = 0;
    this.stageElapsedTime = 0;

    const s = this.settings.getSettings();
    this.player.applySkin(s.selectedSkin);

    if (s.difficulty === "HARD") {
      this.player.lives = 1;
    }

    if (s.gameMode === "ENDLESS") {
      this.endlessDirector.start();
      this.levelDirector.reset();
    } else {
      this.endlessDirector.reset();
      this.levelDirector.startStage(s.selectedStage);
    }

    this.scoreSystem.reset();
    this.hitStopTimer = 0;
    this.state = "PLAYING";
  }

  gameOver(): void {
    const s = this.settings.getSettings();
    if (s.gameMode === "ENDLESS") {
      this.settings.updateEndlessRecord(this.getScore(), this.endlessDirector.getWave());
    }
    this.levelDirector.reset();
    this.endlessDirector.reset();
    this.boss.destroy();
    this.state = "GAME_OVER";
  }

  resetToTitle(): void {
    this.levelDirector.reset();
    this.endlessDirector.reset();
    this.boss.destroy();
    this.projectiles.clear();
    this.enemies.clear();
    this.items.clear();
    this.particles.clear();
    this.state = "TITLE";
  }

  triggerBossEncounter(): void {
    this.levelDirector.seekTime(54.0);
  }

  triggerPowerupAmbush(type: "spread" | "rapid" | "shield" | "bomb"): void {
    this.audio.playAmbushAlert();
    this.triggerScreenShake(0.8, 0.22);

    if (type === "spread") {
      // 5-ship interceptor chevron spanning the vertical lanes (ideal for 3-way spread fire)
      this.levelDispatcher?.showBanner("SPREAD CANNON ACTIVE // INTERCEPTOR WING DETECTED!", 2.2);
      this.enemies.spawn("scout", 168, 45, 34, 1, 100);
      this.enemies.spawn("weaver", 176, 28, 28, 2, 200);
      this.enemies.spawn("weaver", 176, 62, 28, 2, 200);
      this.enemies.spawn("scout", 184, 16, 36, 1, 100);
      this.enemies.spawn("scout", 184, 74, 36, 1, 100);
    } else if (type === "rapid") {
      // Heavy armored assault squadron with high HP chaser gunships (ideal for rapid fire shredding)
      this.levelDispatcher?.showBanner("RAPID FIRE ENGAGED // ASSAULT DREADNOUGHT PATROL!", 2.2);
      this.enemies.spawn("chaser", 170, 36, 22, 3, 350);
      this.enemies.spawn("chaser", 175, 54, 22, 3, 350);
      this.enemies.spawn("scout", 165, 22, 38, 1, 100);
      this.enemies.spawn("scout", 165, 68, 38, 1, 100);
    } else if (type === "shield") {
      // Aggressive dive-bomber ambush flight challenging player's barrier shield
      this.levelDispatcher?.showBanner("BARRIER SHIELD ONLINE // DIVE-BOMBER AMBUSH FLIGHT!", 2.2);
      this.enemies.spawn("swooper", 168, 68, 42, 1, 250);
      this.enemies.spawn("swooper", 174, 48, 42, 1, 250);
      this.enemies.spawn("swooper", 180, 26, 42, 1, 250);
      this.enemies.spawn("weaver", 172, 45, 26, 2, 200);
    } else if (type === "bomb") {
      // Fast counter-strike patrol rushing into the cleared airspace
      this.levelDispatcher?.showBanner("EMP DETONATED // HOSTILE COUNTER-STRIKE PATROL!", 2.2);
      this.enemies.spawn("scout", 166, 45, 40, 1, 100);
      this.enemies.spawn("scout", 174, 30, 38, 1, 100);
      this.enemies.spawn("scout", 174, 60, 38, 1, 100);
      this.enemies.spawn("swooper", 182, 45, 42, 1, 250);
    }
  }

  // Debug & Developer Testing API
  setTimeScale(scale: number): void {
    this.timeScale = Math.max(0.1, Math.min(4.0, scale));
  }

  getTimeScale(): number {
    return this.timeScale;
  }

  toggleGodMode(): boolean {
    this.player.godMode = !this.player.godMode;
    return this.player.godMode;
  }

  isGodMode(): boolean {
    return this.player.godMode;
  }

  debugGivePowerup(type: "spread" | "rapid" | "shield"): void {
    this.player.activatePowerup(type);
    this.audio.playPowerup();
    this.particles.emitImpact(this.player.position.x, this.player.position.y, 6);
  }

  debugDetonateBomb(): void {
    this.audio.playEmpBomb();
    this.triggerScreenShake(2.5, 0.4);
    this.levelDispatcher?.showBanner("EMP SMART BOMB DETONATED", 2.0);

    const projs = this.projectiles.getAll();
    for (let i = 0; i < projs.length; i++) {
      if (projs[i].active && projs[i].owner === "enemy") {
        this.particles.emitImpact(projs[i].position.x, projs[i].position.y, 2);
        projs[i].destroy();
      }
    }

    const enms = this.enemies.getAll();
    for (let i = 0; i < enms.length; i++) {
      if (enms[i].active) {
        const killed = enms[i].takeDamage(POWERUP_BOMB_DAMAGE);
        this.particles.emitExplosion(enms[i].position.x, enms[i].position.y, 8);
        if (killed) {
          this.enemiesDestroyed++;
          this.scoreSystem.addScore(enms[i].scoreValue);
        }
      }
    }

    if (this.boss.active) {
      this.boss.takeDamage(POWERUP_BOMB_DAMAGE);
      this.particles.emitExplosion(this.boss.position.x, this.boss.position.y, 16);
    }
  }

  debugSpawnEnemy(archetype: EnemyArchetype): void {
    const y = 15 + Math.random() * 60;
    this.enemies.spawn(archetype, 168, y);
    this.audio.playEnemyShoot();
  }

  debugSpawnBoss(): void {
    if (!this.boss.active) {
      this.boss.spawn(140, 45);
      this.audio.playWarningSiren();
      this.levelDispatcher?.showBossWarning("TITAN WARDEN DETECTED // COMBAT READY", 3.0);
    }
  }

  debugSetBossHp(hp: number): void {
    if (this.boss.active) {
      this.boss.hp = Math.max(1, hp);
      if (hp <= 12) {
        this.boss.isEnraged = true;
        this.boss.state = "ENRAGED";
      } else if (hp <= 30) {
        this.boss.state = "PHASE_2";
      }
    }
  }

  debugClearAllEnemies(): void {
    const enms = this.enemies.getAll();
    for (let i = 0; i < enms.length; i++) {
      if (enms[i].active) {
        this.particles.emitExplosion(enms[i].position.x, enms[i].position.y, 6);
        enms[i].destroy();
      }
    }
    const projs = this.projectiles.getAll();
    for (let i = 0; i < projs.length; i++) {
      if (projs[i].active && projs[i].owner === "enemy") {
        projs[i].destroy();
      }
    }
    if (this.boss.active) {
      this.boss.destroy();
    }
    this.audio.playShieldBreak();
  }

  debugSpawnItem(type: ItemType): void {
    const x = Math.min(130, this.player.position.x + 35);
    const y = this.player.position.y;
    this.items.acquire(x, y, type);
    this.audio.playMenuMove();
  }

  debugSetStage(stage: number): void {
    this.settings.setSelectedStage(stage);
    if (this.state === "PLAYING") {
      this.levelDirector.startStage(stage);
    }
    this.audio.playMenuSelect();
  }

  debugSetEndlessWave(wave: number): void {
    this.settings.setGameMode("ENDLESS");
    if (this.state !== "PLAYING") {
      this.startGame();
    }
    this.endlessDirector.start();
    (this.endlessDirector as any).wave = wave;
    this.levelDispatcher?.showBanner(`ENDLESS WAVE ${wave} ENGAGED`, 2.5);
    this.audio.playMenuSelect();
  }

  debugPlaySfx(name: string): void {
    const a = this.audio as any;
    if (typeof a[name] === "function") {
      a[name]();
    }
  }
}
