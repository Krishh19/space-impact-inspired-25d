import {
  ENEMY_PROJECTILE_DESPAWN_X,
  ENEMY_PROJECTILE_HEIGHT,
  ENEMY_PROJECTILE_WIDTH,
  PROJECTILE_DESPAWN_X,
  PROJECTILE_HEIGHT,
  PROJECTILE_WIDTH,
} from "../core/Constants";
import type { BoundingBox, Entity, GameVec2, ProjectileOwner } from "../core/Types";

export class Projectile implements Entity {
  readonly id: number;
  active = false;
  owner: ProjectileOwner = "player";
  readonly position: GameVec2 = { x: 0, y: 0 };
  readonly velocity: GameVec2 = { x: 0, y: 0 };
  width = PROJECTILE_WIDTH;
  height = PROJECTILE_HEIGHT;
  damage = 1;

  constructor(id: number) {
    this.id = id;
  }

  spawn(
    x: number,
    y: number,
    vx: number,
    vy: number,
    owner: ProjectileOwner = "player"
  ): void {
    this.owner = owner;
    this.position.x = x;
    this.position.y = y;
    this.velocity.x = vx;
    this.velocity.y = vy;
    this.width = owner === "player" ? PROJECTILE_WIDTH : ENEMY_PROJECTILE_WIDTH;
    this.height =
      owner === "player" ? PROJECTILE_HEIGHT : ENEMY_PROJECTILE_HEIGHT;
    this.active = true;
  }

  update(dt: number): void {
    if (!this.active) return;

    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;

    if (this.owner === "player") {
      if (this.position.x > PROJECTILE_DESPAWN_X) {
        this.destroy();
      }
    } else {
      if (
        this.position.x < ENEMY_PROJECTILE_DESPAWN_X ||
        this.position.y < -5 ||
        this.position.y > 95
      ) {
        this.destroy();
      }
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
  }
}
