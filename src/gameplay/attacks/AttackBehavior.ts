import type { BehaviorContext, GameVec2 } from "../../core/Types";

export interface AttackBehavior {
  reset?(): void;
  update(position: GameVec2, dt: number, ctx: BehaviorContext): void;
}
