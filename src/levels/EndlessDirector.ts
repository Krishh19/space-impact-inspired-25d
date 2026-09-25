import type { AudioManager } from "../audio/AudioManager";
import type { EnemyArchetype } from "../core/Types";
import type { EnemyPool } from "../gameplay/EnemyPool";
import type { LevelEventDispatcher } from "./LevelDirector";

export class EndlessDirector {
  private wave = 1;
  private waveTimer = 0;
  private spawnTimer = 0;
  private active = false;
  private waveDuration = 14.0;
  private isEliteWave = false;

  start(): void {
    this.wave = 1;
    this.waveTimer = 0;
    this.spawnTimer = 2.0; // initial grace period
    this.active = true;
    this.isEliteWave = false;
  }

  update(
    dt: number,
    enemyPool: EnemyPool,
    dispatcher: LevelEventDispatcher,
    audio: AudioManager
  ): void {
    if (!this.active) return;

    this.waveTimer += dt;
    this.spawnTimer -= dt;

    // Spawn pulses during wave
    if (this.spawnTimer <= 0) {
      this.spawnPulse(enemyPool);
      // Spawn interval decreases as wave advances (min 1.6s)
      this.spawnTimer = Math.max(1.6, 3.2 - Math.min(1.5, this.wave * 0.1));
    }

    // Transition to next wave
    if (this.waveTimer >= this.waveDuration) {
      this.wave++;
      this.waveTimer = 0;
      this.spawnTimer = 2.5;
      this.isEliteWave = this.wave % 5 === 0;

      if (this.isEliteWave) {
        dispatcher.showBossWarning(`WAVE ${this.wave}: ELITE SIGNATURE`, 3.5);
        audio.playWarningSiren();
        // Spawn an elite chaser gunship
        const hp = 5 + Math.floor(this.wave * 0.8);
        enemyPool.spawn("chaser", 175, 45, 20, hp, 500);
      } else {
        dispatcher.showBanner(`ENDLESS WAVE ${this.wave}`, 2.2);
        audio.playMenuMove();
      }
    }
  }

  private spawnPulse(enemyPool: EnemyPool): void {
    const archetypes: EnemyArchetype[] = ["scout"];
    if (this.wave >= 2) archetypes.push("weaver");
    if (this.wave >= 3) archetypes.push("swooper");
    if (this.wave >= 4) archetypes.push("chaser");

    const count = Math.min(4, 1 + Math.floor(Math.random() * 2) + Math.floor(this.wave / 6));

    for (let i = 0; i < count; i++) {
      const type = archetypes[Math.floor(Math.random() * archetypes.length)];
      const y = 14 + Math.random() * 62;
      const x = 170 + i * 14;

      // Slight HP & speed scaling with wave
      let hp = 1;
      let speed = 35;
      let score = 100;

      if (type === "weaver") {
        hp = this.wave >= 6 ? 3 : 2;
        speed = 28;
        score = 200;
      } else if (type === "swooper") {
        hp = this.wave >= 8 ? 2 : 1;
        speed = 42;
        score = 250;
      } else if (type === "chaser") {
        hp = 3 + Math.floor(this.wave / 5);
        speed = 22;
        score = 350;
      }

      enemyPool.spawn(type, x, y, speed, hp, score);
    }
  }

  reset(): void {
    this.wave = 1;
    this.waveTimer = 0;
    this.spawnTimer = 0;
    this.active = false;
    this.isEliteWave = false;
  }

  getWave(): number {
    return this.wave;
  }
}
