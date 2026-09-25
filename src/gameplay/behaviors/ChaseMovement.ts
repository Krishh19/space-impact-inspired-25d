import type { BehaviorContext, GameVec2 } from "../../core/Types";
import type { MovementBehavior } from "./MovementBehavior";

export class ChaseMovement implements MovementBehavior {
  private readonly trackSpeed: number;

  constructor(trackSpeed = 22) {
    this.trackSpeed = trackSpeed;
  }

  reset(): void {}

  update(
    position: GameVec2,
    velocity: GameVec2,
    dt: number,
    ctx?: BehaviorContext
  ): void {
    if (ctx) {
      const dy = ctx.playerPosition.y - position.y;
      if (Math.abs(dy) > 1.5) {
        const targetVy = Math.sign(dy) * this.trackSpeed;
        velocity.y += (targetVy - velocity.y) * Math.min(1.0, dt * 3.5);
      } else {
        velocity.y *= 0.8;
      }
    }

    position.x += velocity.x * dt;
    position.y += velocity.y * dt;

    if (position.y < 8) {
      position.y = 8;
      velocity.y = 0;
    } else if (position.y > 82) {
      position.y = 82;
      velocity.y = 0;
    }
  }
}
