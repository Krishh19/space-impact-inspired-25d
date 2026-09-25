import type { GameVec2 } from "../../core/Types";
import type { MovementBehavior } from "./MovementBehavior";

export class SineMovement implements MovementBehavior {
  private initialY = 45;
  private time = 0;
  private readonly amplitude: number;
  private readonly frequency: number;

  constructor(amplitude = 18, frequency = 2.8) {
    this.amplitude = amplitude;
    this.frequency = frequency;
  }

  reset(initialY: number): void {
    this.initialY = initialY;
    this.time = 0;
  }

  update(position: GameVec2, velocity: GameVec2, dt: number): void {
    this.time += dt;
    position.x += velocity.x * dt;
    position.y =
      this.initialY + Math.sin(this.time * this.frequency) * this.amplitude;

    // Clamp inside playfield bounds
    if (position.y < 8) position.y = 8;
    else if (position.y > 82) position.y = 82;
  }
}
