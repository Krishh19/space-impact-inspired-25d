import {
  PLAYER_BLINK_INTERVAL,
  PLAYER_FIRE_COOLDOWN,
  PLAYER_HEIGHT,
  PLAYER_INVULNERABILITY_TIME,
  PLAYER_MAX_X,
  PLAYER_MAX_Y,
  PLAYER_MIN_X,
  PLAYER_MIN_Y,
  PLAYER_SPEED,
  PLAYER_START_LIVES,
  PLAYER_START_X,
  PLAYER_START_Y,
  PLAYER_WIDTH,
  PROJECTILE_SPEED,
} from "../core/Constants";
import type { BoundingBox, Entity, GameVec2, InputState } from "../core/Types";
import type { ProjectilePool } from "./ProjectilePool";

export class Player implements Entity {
  readonly id = 0;
  active = true;
  readonly position: GameVec2 = { x: PLAYER_START_X, y: PLAYER_START_Y };
  readonly velocity: GameVec2 = { x: 0, y: 0 };
  readonly width = PLAYER_WIDTH;
  readonly height = PLAYER_HEIGHT;

  lives = PLAYER_START_LIVES;
  invulnerabilityTimer = 0;
  private blinkTimer = 0;
  visible = true;
  private fireCooldown = 0;

  updateWithInput(
    dt: number,
    input: Readonly<InputState>,
    projectilePool: ProjectilePool
  ): boolean {
    if (!this.active) return false;

    // Direction calculation
    let dx = 0;
    let dy = 0;

    if (input.left) dx -= 1;
    if (input.right) dx += 1;
    if (input.up) dy += 1;
    if (input.down) dy -= 1;

    if (dx !== 0 && dy !== 0) {
      const invLen = 1 / Math.SQRT2;
      dx *= invLen;
      dy *= invLen;
    }

    this.velocity.x = dx * PLAYER_SPEED;
    this.velocity.y = dy * PLAYER_SPEED;

    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;

    // Clamp inside playfield boundaries
    if (this.position.x < PLAYER_MIN_X) this.position.x = PLAYER_MIN_X;
    if (this.position.x > PLAYER_MAX_X) this.position.x = PLAYER_MAX_X;
    if (this.position.y < PLAYER_MIN_Y) this.position.y = PLAYER_MIN_Y;
    if (this.position.y > PLAYER_MAX_Y) this.position.y = PLAYER_MAX_Y;

    // Primary weapon fire
    let didShoot = false;
    if (this.fireCooldown > 0) {
      this.fireCooldown -= dt;
    }

    if (input.fire && this.fireCooldown <= 0) {
      const bulletX = this.position.x + this.width / 2;
      const bulletY = this.position.y;
      const spawned = projectilePool.acquire(bulletX, bulletY, PROJECTILE_SPEED, 0);
      if (spawned) {
        this.fireCooldown = PLAYER_FIRE_COOLDOWN;
        didShoot = true;
      }
    }

    // Invulnerability and visual blinking
    if (this.invulnerabilityTimer > 0) {
      this.invulnerabilityTimer -= dt;
      this.blinkTimer += dt;
      if (this.blinkTimer >= PLAYER_BLINK_INTERVAL) {
        this.blinkTimer = 0;
        this.visible = !this.visible;
      }
      if (this.invulnerabilityTimer <= 0) {
        this.invulnerabilityTimer = 0;
        this.visible = true;
      }
    } else {
      this.visible = true;
    }

    return didShoot;
  }

  update(dt: number): void {
    // Standard Entity update interface compliance
    if (this.invulnerabilityTimer > 0) {
      this.invulnerabilityTimer -= dt;
    }
  }

  takeDamage(): boolean {
    if (this.invulnerabilityTimer > 0 || !this.active) {
      return false;
    }

    this.lives -= 1;
    this.invulnerabilityTimer = PLAYER_INVULNERABILITY_TIME;
    this.blinkTimer = 0;
    this.visible = false;

    if (this.lives <= 0) {
      this.lives = 0;
      this.active = false;
      this.visible = false;
      return true; // Player eliminated
    }

    return false;
  }

  getBounds(out: BoundingBox): void {
    out.x = this.position.x - this.width / 2;
    out.y = this.position.y - this.height / 2;
    out.width = this.width;
    out.height = this.height;
  }

  reset(): void {
    this.position.x = PLAYER_START_X;
    this.position.y = PLAYER_START_Y;
    this.velocity.x = 0;
    this.velocity.y = 0;
    this.lives = PLAYER_START_LIVES;
    this.invulnerabilityTimer = 0;
    this.blinkTimer = 0;
    this.visible = true;
    this.fireCooldown = 0;
    this.active = true;
  }

  destroy(): void {
    this.active = false;
    this.visible = false;
  }
}
