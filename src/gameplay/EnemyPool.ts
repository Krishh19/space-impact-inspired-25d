import { ENEMY_POOL_SIZE } from "../core/Constants";
import type { BehaviorContext, EnemyArchetype } from "../core/Types";
import { Enemy } from "./Enemy";

export class EnemyPool {
  private readonly pool: Enemy[] = [];

  constructor(size = ENEMY_POOL_SIZE) {
    for (let i = 0; i < size; i++) {
      this.pool.push(new Enemy(i));
    }
  }

  spawn(
    archetype: EnemyArchetype,
    x: number,
    y: number,
    speed?: number,
    hp?: number,
    score?: number
  ): Enemy | null {
    for (let i = 0; i < this.pool.length; i++) {
      const enemy = this.pool[i];
      if (!enemy.active) {
        enemy.spawn(archetype, x, y, speed, hp, score);
        return enemy;
      }
    }
    return null;
  }

  spawnScout(
    x: number,
    y: number,
    speed?: number,
    hp?: number,
    score?: number
  ): Enemy | null {
    return this.spawn("scout", x, y, speed, hp, score);
  }

  update(dt: number, ctx?: BehaviorContext): void {
    for (let i = 0; i < this.pool.length; i++) {
      const enemy = this.pool[i];
      if (enemy.active) {
        enemy.update(dt, ctx);
      }
    }
  }

  getAll(): readonly Enemy[] {
    return this.pool;
  }

  clear(): void {
    for (let i = 0; i < this.pool.length; i++) {
      this.pool[i].destroy();
    }
  }

  getActiveCount(): number {
    let count = 0;
    for (let i = 0; i < this.pool.length; i++) {
      if (this.pool[i].active) count++;
    }
    return count;
  }
}
