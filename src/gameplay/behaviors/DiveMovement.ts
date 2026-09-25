import type { BehaviorContext, GameVec2 } from "../../core/Types";
import type { MovementBehavior } from "./MovementBehavior";

export class DiveMovement implements MovementBehavior {
  private hasDived = false;
  private diveTriggerX = 125;
  private diveVy = 0;

  reset(): void {
    this.hasDived = false;
    this.diveTriggerX = 115 + Math.random() * 20;
    this.diveVy = 0;
  }

  update(
    position: GameVec2,
    velocity: GameVec2,
    dt: number,
    ctx?: BehaviorContext
  ): void {
    if (!this.hasDived && position.x <= this.diveTriggerX) {
      this.hasDived = true;
      const targetY = ctx ? ctx.playerPosition.y : 45;
      const dy = targetY - position.y;
      this.diveVy = Math.sign(dy) * 40;
      velocity.x *= 1.2;
    }

    position.x += velocity.x * dt;
    if (this.hasDived) {
      position.y += this.diveVy * dt;
    } else {
      position.y += velocity.y * dt;
    }

    // Boundary rebound
    if (position.y < 6) {
      position.y = 6;
      this.diveVy = -this.diveVy * 0.4;
    } else if (position.y > 84) {
      position.y = 84;
      this.diveVy = -this.diveVy * 0.4;
    }
  }
}
