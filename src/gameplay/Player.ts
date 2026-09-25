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
  POWERUP_RAPID_DURATION,
  POWERUP_SPREAD_DURATION,
  PROJECTILE_SPEED,
  SHIP_SKINS,
} from "../core/Constants";
import type { BoundingBox, Entity, GameVec2, InputState, SkinId } from "../core/Types";
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

  // Power-ups, skin and debug state
  currentSkin: SkinId = "alpha";
  speedMultiplier = 1.0;
  hasShield = false;
  spreadTimer = 0;
  rapidTimer = 0;
  godMode = false;

  constructor() {
    this.applySkin("alpha");
  }

  applySkin(skinId: SkinId): void {
    this.currentSkin = skinId;
    const def = SHIP_SKINS.find((s) => s.id === skinId) || SHIP_SKINS[0];
    this.speedMultiplier = def.speedMultiplier;
    if (def.hasStartingShield) {
      this.hasShield = true;
    }
  }

  activatePowerup(type: "spread" | "rapid" | "shield"): void {
    if (type === "spread") {
      this.spreadTimer = POWERUP_SPREAD_DURATION;
    } else if (type === "rapid") {
      this.rapidTimer = POWERUP_RAPID_DURATION;
    } else if (type === "shield") {
      this.hasShield = true;
    }
  }

  updateWithInput(
    dt: number,
    input: Readonly<InputState>,
    projectilePool: ProjectilePool
  ): boolean {
    if (!this.active) return false;

    // Power-up timers
    if (this.spreadTimer > 0) this.spreadTimer -= dt;
    if (this.rapidTimer > 0) this.rapidTimer -= dt;

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

    const effectiveSpeed = PLAYER_SPEED * this.speedMultiplier;
    this.velocity.x = dx * effectiveSpeed;
    this.velocity.y = dy * effectiveSpeed;

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

    const currentCooldown = this.rapidTimer > 0 ? PLAYER_FIRE_COOLDOWN * 0.5 : PLAYER_FIRE_COOLDOWN;

    if (input.fire && this.fireCooldown <= 0) {
      const bulletX = this.position.x + this.width / 2;
      const bulletY = this.position.y;

      if (this.spreadTimer > 0) {
        // 3-Way Spread Salvo
        projectilePool.acquire(bulletX, bulletY, PROJECTILE_SPEED, 0);
        projectilePool.acquire(bulletX, bulletY + 2, PROJECTILE_SPEED * 0.96, PROJECTILE_SPEED * 0.26);
        projectilePool.acquire(bulletX, bulletY - 2, PROJECTILE_SPEED * 0.96, -PROJECTILE_SPEED * 0.26);
        this.fireCooldown = currentCooldown;
        didShoot = true;
      } else if (this.currentSkin === "solaris") {
        // Twin Heavy Plasma Cannons
        projectilePool.acquire(bulletX, bulletY + 2.5, PROJECTILE_SPEED, 0);
        projectilePool.acquire(bulletX, bulletY - 2.5, PROJECTILE_SPEED, 0);
        this.fireCooldown = currentCooldown;
        didShoot = true;
      } else {
        // Standard Cannon
        const spawned = projectilePool.acquire(bulletX, bulletY, PROJECTILE_SPEED, 0);
        if (spawned) {
          this.fireCooldown = currentCooldown;
          didShoot = true;
        }
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
    if (this.invulnerabilityTimer > 0) {
      this.invulnerabilityTimer -= dt;
    }
  }

  takeDamage(onShieldAbsorb?: () => void): boolean {
    if (this.godMode || this.invulnerabilityTimer > 0 || !this.active) {
      return false;
    }

    // Shield absorbs the damage hit
    if (this.hasShield) {
      this.hasShield = false;
      this.invulnerabilityTimer = 1.0;
      this.blinkTimer = 0;
      onShieldAbsorb?.();
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
    this.spreadTimer = 0;
    this.rapidTimer = 0;
    this.hasShield = false;
    this.applySkin(this.currentSkin);
  }

  destroy(): void {
    this.active = false;
    this.visible = false;
  }
}
