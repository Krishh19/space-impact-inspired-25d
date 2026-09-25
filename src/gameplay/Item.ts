import { ITEM_DRIFT_SPEED, ITEM_HEIGHT, ITEM_LIFETIME, ITEM_WIDTH } from "../core/Constants";
import type { BoundingBox, Entity, GameVec2, ItemType } from "../core/Types";

export class Item implements Entity {
  readonly id: number;
  active = false;
  readonly position: GameVec2 = { x: 0, y: 0 };
  readonly velocity: GameVec2 = { x: 0, y: 0 };
  readonly width = ITEM_WIDTH;
  readonly height = ITEM_HEIGHT;

  type: ItemType = "coin";
  lifetime = 0;
  animTimer = 0;
  visible = true;

  constructor(id: number) {
    this.id = id;
  }

  spawn(x: number, y: number, type: ItemType): void {
    this.position.x = x;
    this.position.y = y;
    this.type = type;
    // Gentle leftward drift with slight vertical buoyancy
    this.velocity.x = -ITEM_DRIFT_SPEED;
    this.velocity.y = (Math.random() - 0.5) * 12;
    this.lifetime = ITEM_LIFETIME;
    this.animTimer = 0;
    this.visible = true;
    this.active = true;
  }

  update(dt: number): void {
    if (!this.active) return;

    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;

    // Soft bounds clamp vertically
    if (this.position.y < 8) {
      this.position.y = 8;
      this.velocity.y = Math.abs(this.velocity.y);
    } else if (this.position.y > 82) {
      this.position.y = 82;
      this.velocity.y = -Math.abs(this.velocity.y);
    }

    this.lifetime -= dt;
    this.animTimer += dt;

    // Flashing blink warning before despawning in the last 2.5s
    if (this.lifetime < 2.5) {
      this.visible = Math.floor(this.lifetime * 8) % 2 === 0;
    } else {
      this.visible = true;
    }

    // Despawn if lifetime expires or drifts past the left boundary
    if (this.lifetime <= 0 || this.position.x < -10) {
      this.destroy();
    }
  }

  getBounds(out: BoundingBox): void {
    out.x = this.position.x - this.width / 2;
    out.y = this.position.y - this.height / 2;
    out.width = this.width;
    out.height = this.height;
  }

  destroy(): void {
    this.active = false;
    this.visible = false;
  }
}
