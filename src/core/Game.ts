import {
  FIXED_DT,
  HIT_STOP_ENEMY_DESTROY,
  HIT_STOP_PLAYER_DAMAGE,
  MAX_FRAME_DELTA,
  SHAKE_ENEMY_DESTROY_DURATION,
  SHAKE_ENEMY_DESTROY_INTENSITY,
  SHAKE_PLAYER_DAMAGE_DURATION,
  SHAKE_PLAYER_DAMAGE_INTENSITY,
} from "./Constants";
import type { BehaviorContext, CombatStats, GameState } from "./Types";
import { AudioManager } from "../audio/AudioManager";
import { CollisionSystem } from "../gameplay/CollisionSystem";
import { EnemyPool } from "../gameplay/EnemyPool";
import { ParticlePool } from "../gameplay/ParticlePool";
import { Player } from "../gameplay/Player";
import { ProjectilePool } from "../gameplay/ProjectilePool";
import { TitanWarden } from "../gameplay/boss/TitanWarden";
import type { LevelEventDispatcher } from "../levels/LevelDirector";
import { LevelDirector } from "../levels/LevelDirector";
import { InputManager } from "../systems/InputManager";
import { ScoreSystem } from "../systems/ScoreSystem";
import { SettingsManager } from "../systems/SettingsManager";
import { Spawner } from "../systems/Spawner";

export class Game {
  private accumulator = 0;
  private readonly fixedDt = FIXED_DT;

  private state: GameState = "TITLE";
  private hitStopTimer = 0;

  private readonly input: InputManager;
  private readonly player: Player;
  private readonly projectiles: ProjectilePool;
  private readonly enemies: EnemyPool;
  private readonly boss: TitanWarden;
  private readonly particles: ParticlePool;
  private readonly collisions: CollisionSystem;
  private readonly spawner: Spawner;
  private readonly scoreSystem: ScoreSystem;
  private readonly levelDirector: LevelDirector;
  private levelDispatcher?: LevelEventDispatcher;
  private readonly behaviorContext: BehaviorContext;
  readonly audio: AudioManager;
  readonly settings: SettingsManager;

  // Combat telemetry & mission statistics
  private shotsFired = 0;
  private shotsHit = 0;
  private enemiesDestroyed = 0;
  private stageElapsedTime = 0;

  private onShakeCallback?: (intensity: number, duration: number) => void;

  constructor(input: InputManager) {
    this.input = input;
    this.player = new Player();
    this.projectiles = new ProjectilePool();
    this.enemies = new EnemyPool();
    this.boss = new TitanWarden();
    this.particles = new ParticlePool();
    this.collisions = new CollisionSystem();
    this.spawner = new Spawner();
    this.scoreSystem = new ScoreSystem();
    this.levelDirector = new LevelDirector();
    this.audio = new AudioManager();
    this.settings = new SettingsManager();

    this.settings.subscribe((s) => {
      this.audio.setMuted(s.muted);
      this.audio.setVolume(s.volume);
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

  spawnBoss(_bossId: string, _name: string, hp: number): void {
    this.boss.spawn(180, 45, hp, {
      onDefeated: () => {
        this.scoreSystem.addScore(5000);
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

  setOnShake(callback: (intensity: number, duration: number) => void): void {
    this.onShakeCallback = callback;
  }

  triggerHitStop(duration: number): void {
    this.hitStopTimer = Math.max(this.hitStopTimer, duration);
  }

  updateFrame(frameDelta: number): void {
    const clamped = Math.min(frameDelta, MAX_FRAME_DELTA);
    this.accumulator += clamped;

    while (this.accumulator >= this.fixedDt) {
      this.update(this.fixedDt);
      this.accumulator -= this.fixedDt;
    }
  }

  private update(dt: number): void {
    const inputState = this.input.getState();

    // Unlock audio on any active key press
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

    // Always update visual particles even if entity simulation is paused by hit-stop
    this.particles.update(dt);

    // Hit-stop impact freeze: pause entity updates for visceral impact weight
    if (this.hitStopTimer > 0) {
      this.hitStopTimer -= dt;
      return;
    }

    // Game state transitions
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

    if (this.state === "GAME_OVER") {
      if (this.input.consumeAction("start")) {
        this.startGame();
      }
      this.input.clearJustPressed();
      return;
    }

    if (this.state === "VICTORY") {
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

    // 1. Level Timeline Director (Level 1 script)
    if (this.levelDispatcher) {
      this.levelDirector.update(
        dt,
        this.enemies,
        this.levelDispatcher,
        this.audio
      );
    }

    // 2. Player
    const didShoot = this.player.updateWithInput(dt, inputState, this.projectiles);
    if (didShoot) {
      this.shotsFired++;
      this.audio.playShoot();
    }

    // 3. Enemies
    this.enemies.update(dt, this.behaviorContext);

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
          this.scoreSystem.addScore(enemy.scoreValue);
          this.audio.playExplosion();
          this.particles.emitExplosion(enemy.position.x, enemy.position.y, 10);
          this.triggerHitStop(HIT_STOP_ENEMY_DESTROY);
          this.triggerScreenShake(
            SHAKE_ENEMY_DESTROY_INTENSITY,
            SHAKE_ENEMY_DESTROY_DURATION
          );
        } else {
          this.audio.playImpact();
          this.particles.emitImpact(enemy.position.x, enemy.position.y, 3);
        }
      }
    );

    // Enemy Projectiles vs Player
    this.collisions.checkEnemyProjectilePlayerCollisions(
      this.projectiles,
      this.player,
      (_proj, playerKilled) => {
        this.audio.playPlayerHit();
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
        }
      }
    );

    // Player vs Enemies
    this.collisions.checkPlayerEnemyCollisions(
      this.player,
      this.enemies,
      (enemy, playerKilled) => {
        this.audio.playPlayerHit();
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
          this.audio.playPlayerHit();
          this.particles.emitExplosion(this.player.position.x, this.player.position.y, 16);
          this.triggerHitStop(HIT_STOP_PLAYER_DAMAGE);
          this.triggerScreenShake(
            SHAKE_PLAYER_DAMAGE_INTENSITY,
            SHAKE_PLAYER_DAMAGE_DURATION
          );

          if (playerKilled) {
            this.audio.playGameOver();
            this.gameOver();
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
    this.boss.destroy();
    this.particles.clear();
    this.shotsFired = 0;
    this.shotsHit = 0;
    this.enemiesDestroyed = 0;
    this.stageElapsedTime = 0;
    this.levelDirector.startLevel();
    this.scoreSystem.reset();
    this.hitStopTimer = 0;
    this.state = "PLAYING";
  }

  gameOver(): void {
    this.levelDirector.reset();
    this.boss.destroy();
    this.state = "GAME_OVER";
  }

  resetToTitle(): void {
    this.levelDirector.reset();
    this.boss.destroy();
    this.projectiles.clear();
    this.enemies.clear();
    this.particles.clear();
    this.state = "TITLE";
  }

  triggerBossEncounter(): void {
    this.levelDirector.seekTime(77.0);
  }
}
