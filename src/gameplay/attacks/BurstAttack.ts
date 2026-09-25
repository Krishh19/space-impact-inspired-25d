import { ENEMY_PROJECTILE_SPEED } from "../../core/Constants";
import type { BehaviorContext, GameVec2 } from "../../core/Types";
import type { AttackBehavior } from "./AttackBehavior";

export class BurstAttack implements AttackBehavior {
  private cooldown: number;
  private readonly fireRate: number;

  constructor(initialDelay = 1.0, fireRate = 2.5) {
    this.fireRate = fireRate;
    this.cooldown = initialDelay;
  }

  reset(): void {
    this.cooldown = 0.9 + Math.random() * 0.9;
  }

  update(position: GameVec2, dt: number, ctx: BehaviorContext): void {
    this.cooldown -= dt;
    if (this.cooldown <= 0) {
      this.cooldown = this.fireRate;
      if (position.x > 20 && position.x < 155) {
        const speed = ENEMY_PROJECTILE_SPEED * 0.9;
        // Central shot
        ctx.spawnEnemyProjectile(position.x - 4, position.y, -speed, 0);
        // Angled up shot
        ctx.spawnEnemyProjectile(
          position.x - 4,
          position.y + 1,
          -speed * 0.95,
          15
        );
        // Angled down shot
        ctx.spawnEnemyProjectile(
          position.x - 4,
          position.y - 1,
          -speed * 0.95,
          -15
        );
      }
    }
  }
}
