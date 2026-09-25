import type { GameVec2 } from "../../core/Types";
import type { MovementBehavior } from "./MovementBehavior";

export class StraightMovement implements MovementBehavior {
  update(position: GameVec2, velocity: GameVec2, dt: number): void {
    position.x += velocity.x * dt;
    position.y += velocity.y * dt;
  }
}
