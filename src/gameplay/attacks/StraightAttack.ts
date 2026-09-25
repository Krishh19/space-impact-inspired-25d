import { ENEMY_PROJECTILE_SPEED } from "../../core/Constants";
import type { BehaviorContext, GameVec2 } from "../../core/Types";
import type { AttackBehavior } from "./AttackBehavior";

export class StraightAttack implements AttackBehavior {
  private cooldown: number;
  private readonly fireRate: number;

  constructor(initialDelay = 0.8, fireRate = 2.0) {
    this.fireRate = fireRate;
    this.cooldown = initialDelay;
  }

  reset(): void {
    this.cooldown = 0.8 + Math.random() * 0.8;
  }

  update(position: GameVec2, dt: number, ctx: BehaviorContext): void {
    this.cooldown -= dt;
    if (this.cooldown <= 0) {
      this.cooldown = this.fireRate;
      if (position.x > 15 && position.x < 155) {
        ctx.spawnEnemyProjectile(
          position.x - 4,
          position.y,
          -ENEMY_PROJECTILE_SPEED,
          0
        );
      }
    }
  }
}
