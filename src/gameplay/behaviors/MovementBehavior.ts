import type { BehaviorContext, GameVec2 } from "../../core/Types";

export interface MovementBehavior {
  reset?(initialY: number): void;
  update(
    position: GameVec2,
    velocity: GameVec2,
    dt: number,
    ctx?: BehaviorContext
  ): void;
}
