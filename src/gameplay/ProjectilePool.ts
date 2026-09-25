import { PROJECTILE_POOL_SIZE } from "../core/Constants";
import type { ProjectileOwner } from "../core/Types";
import { Projectile } from "./Projectile";

export class ProjectilePool {
  private readonly pool: Projectile[] = [];

  constructor(size = PROJECTILE_POOL_SIZE) {
    for (let i = 0; i < size; i++) {
      this.pool.push(new Projectile(i));
    }
  }

  acquire(
    x: number,
    y: number,
    vx: number,
    vy: number,
    owner: ProjectileOwner = "player"
  ): Projectile | null {
    for (let i = 0; i < this.pool.length; i++) {
      const proj = this.pool[i];
      if (!proj.active) {
        proj.spawn(x, y, vx, vy, owner);
        return proj;
      }
    }
    return null; // Pool exhausted
  }

  update(dt: number): void {
    for (let i = 0; i < this.pool.length; i++) {
      const proj = this.pool[i];
      if (proj.active) {
        proj.update(dt);
      }
    }
  }

  getAll(): readonly Projectile[] {
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
