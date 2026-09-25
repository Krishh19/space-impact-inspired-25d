import { SCOUT_SPAWN_X, SPAWN_INTERVAL } from "../core/Constants";
import type { EnemyPool } from "../gameplay/EnemyPool";

export class Spawner {
  private timer = 0.4;
  private readonly interval = SPAWN_INTERVAL;
  private waveIndex = 0;
  private readonly minY = 14;
  private readonly maxY = 76;

  update(dt: number, enemyPool: EnemyPool): void {
    this.timer += dt;
    if (this.timer >= this.interval) {
      this.timer -= this.interval;
      this.spawnNextWave(enemyPool);
    }
  }

  private spawnNextWave(enemyPool: EnemyPool): void {
    const cycle = this.waveIndex % 6;
    this.waveIndex++;

    switch (cycle) {
      case 0:
        // Scout straight patrol
        enemyPool.spawn("scout", SCOUT_SPAWN_X, this.randY());
        break;
      case 1:
        // Weaver sinusoidal path + plasma shot
        enemyPool.spawn("weaver", SCOUT_SPAWN_X, this.randY(25, 65));
        break;
      case 2:
        // Scout dual formation
        enemyPool.spawn("scout", SCOUT_SPAWN_X, this.randY(16, 42));
        enemyPool.spawn("scout", SCOUT_SPAWN_X + 14, this.randY(48, 74));
        break;
      case 3:
        // Swooper dive attack from high or low altitude
        enemyPool.spawn("swooper", SCOUT_SPAWN_X, Math.random() > 0.5 ? 74 : 18);
        break;
      case 4:
        // Chaser heavy gunship tracking player with burst attack
        enemyPool.spawn("chaser", SCOUT_SPAWN_X, this.randY(25, 65));
        break;
      case 5:
        // Mixed tactical wave: Weaver + Swooper
        enemyPool.spawn("weaver", SCOUT_SPAWN_X, 45);
        enemyPool.spawn("swooper", SCOUT_SPAWN_X + 15, 70);
        break;
    }
  }

  private randY(min = this.minY, max = this.maxY): number {
    return min + Math.random() * (max - min);
  }

  reset(): void {
    this.timer = 0.4;
    this.waveIndex = 0;
  }
}
