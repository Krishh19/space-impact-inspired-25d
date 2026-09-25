import {
  TITAN_WARDEN_HEIGHT,
  TITAN_WARDEN_HITBOX_HEIGHT,
  TITAN_WARDEN_HITBOX_WIDTH,
  TITAN_WARDEN_HP,
  TITAN_WARDEN_SCORE,
  TITAN_WARDEN_WIDTH,
} from "../../core/Constants";
import type { BehaviorContext, BoundingBox, Entity, GameVec2 } from "../../core/Types";

export type TitanWardenState =
  | "INACTIVE"
  | "INTRO"
  | "PHASE_1"
  | "PHASE_2"
  | "ENRAGED"
  | "DEFEATED";

export class TitanWarden implements Entity {
  readonly id = 999;
  active = false;

  readonly position: GameVec2 = { x: 180, y: 45 };
  readonly width = TITAN_WARDEN_WIDTH;
  readonly height = TITAN_WARDEN_HEIGHT;
  readonly hitboxWidth = TITAN_WARDEN_HITBOX_WIDTH;
  readonly hitboxHeight = TITAN_WARDEN_HITBOX_HEIGHT;

  hp = TITAN_WARDEN_HP;
  maxHp = TITAN_WARDEN_HP;
  scoreValue = TITAN_WARDEN_SCORE;

  state: TitanWardenState = "INACTIVE";
  flashTimer = 0;
  isEnraged = false;

  // Timers & Combat Variables
  private stateTimer = 0;
  private hoverTime = 0;
  private cannonTimer = 0;
  private spreadTimer = 0;
  private surgeCooldown = 5.0;
  private surgePhase: "NONE" | "TELEGRAPH" | "RUSH" | "RETURN" = "NONE";
  private surgeTimer = 0;

  // Defeat Sequence
  private defeatTimer = 0;
  private defeatExplosionCooldown = 0;
  private onDefeatedCallback?: () => void;
  private onSurgeTelegraphCallback?: () => void;
  private onBossShootCallback?: () => void;
  private onHeavyExplosionCallback?: () => void;

  spawn(
    x = 180,
    y = 45,
    hp = TITAN_WARDEN_HP,
    callbacks?: {
      onDefeated?: () => void;
      onSurgeTelegraph?: () => void;
      onBossShoot?: () => void;
      onHeavyExplosion?: () => void;
    }
  ): void {
    this.position.x = x;
    this.position.y = y;
    this.hp = hp;
    this.maxHp = hp;
    this.active = true;
    this.state = "INTRO";
    this.stateTimer = 0;
    this.hoverTime = 0;
    this.cannonTimer = 0;
    this.spreadTimer = 1.0;
    this.surgeCooldown = 6.0;
    this.surgePhase = "NONE";
    this.surgeTimer = 0;
    this.flashTimer = 0;
    this.isEnraged = false;
    this.defeatTimer = 0;
    this.defeatExplosionCooldown = 0;

    if (callbacks) {
      this.onDefeatedCallback = callbacks.onDefeated;
      this.onSurgeTelegraphCallback = callbacks.onSurgeTelegraph;
      this.onBossShootCallback = callbacks.onBossShoot;
      this.onHeavyExplosionCallback = callbacks.onHeavyExplosion;
    }
  }

  getBounds(out: BoundingBox): void {
    out.width = this.hitboxWidth;
    out.height = this.hitboxHeight;
    out.x = this.position.x - this.hitboxWidth / 2;
    out.y = this.position.y - this.hitboxHeight / 2;
  }

  getHpPercent(): number {
    return Math.max(0, this.hp / this.maxHp);
  }

  isInvulnerable(): boolean {
    return this.state === "INTRO" || this.state === "DEFEATED" || !this.active;
  }

  takeDamage(amount = 1): { killed: boolean; hit: boolean } {
    if (this.isInvulnerable()) {
      return { killed: false, hit: false };
    }

    this.hp -= amount;
    this.flashTimer = 0.08;

    if (this.hp <= 0) {
      this.hp = 0;
      this.triggerDefeat();
      return { killed: true, hit: true };
    }

    // Phase checks based on HP percentage
    if (this.hp <= this.maxHp * 0.25 && this.state !== "ENRAGED") {
      this.state = "ENRAGED";
      this.isEnraged = true;
    } else if (
      this.hp <= this.maxHp * 0.6 &&
      this.state === "PHASE_1"
    ) {
      this.state = "PHASE_2";
    }

    return { killed: false, hit: true };
  }

  private triggerDefeat(): void {
    this.state = "DEFEATED";
    this.defeatTimer = 0;
    this.defeatExplosionCooldown = 0;
  }

  update(
    dt: number,
    ctx?: BehaviorContext,
    onExplosion?: (x: number, y: number, count: number) => void,
    onShake?: (intensity: number, duration: number) => void
  ): void {
    if (!this.active) return;

    const activeCtx: BehaviorContext = ctx ?? {
      playerPosition: { x: 20, y: 45 },
      spawnEnemyProjectile: () => {},
    };
    const explosionHandler = onExplosion ?? (() => {});
    const shakeHandler = onShake ?? (() => {});

    this.stateTimer += dt;
    if (this.flashTimer > 0) {
      this.flashTimer -= dt;
    }

    switch (this.state) {
      case "INTRO":
        this.updateIntro(dt);
        break;

      case "PHASE_1":
        this.updatePhase1(dt, activeCtx);
        break;

      case "PHASE_2":
        this.updatePhase2(dt, activeCtx);
        break;

      case "ENRAGED":
        this.updateEnraged(dt, activeCtx);
        break;

      case "DEFEATED":
        this.updateDefeated(dt, explosionHandler, shakeHandler);
        break;
    }
  }

  private updateIntro(dt: number): void {
    // Smooth deceleration from right side to battle station (X: 135)
    if (this.position.x > 135) {
      this.position.x -= 28 * dt;
    } else {
      this.position.x = 135;
      this.state = "PHASE_1";
      this.stateTimer = 0;
      this.hoverTime = 0;
      this.cannonTimer = 0.8;
      this.spreadTimer = 2.2;
    }
  }

  private updatePhase1(dt: number, ctx: BehaviorContext): void {
    this.hoverTime += dt;
    // Hover sinusoidally between Y: 25 and 65
    this.position.y = 45 + 18 * Math.sin(this.hoverTime * 1.3);

    // 1. Alternating Twin Railgun Bolts
    this.cannonTimer -= dt;
    if (this.cannonTimer <= 0) {
      this.cannonTimer = 1.3;
      const isUpper = Math.sin(this.hoverTime * 2.5) > 0;
      const muzzleY = this.position.y + (isUpper ? 6 : -6);
      ctx.spawnEnemyProjectile(this.position.x - 14, muzzleY, -75, 0);
      this.onBossShootCallback?.();
    }

    // 2. Periodic 3-Way Spreading Salvo
    this.spreadTimer -= dt;
    if (this.spreadTimer <= 0) {
      this.spreadTimer = 3.6;
      this.fireSpreadSalvo(ctx, 3, 65, 0.28);
      this.onBossShootCallback?.();
    }
  }

  private updatePhase2(dt: number, ctx: BehaviorContext): void {
    this.hoverTime += dt;

    // Handle Surge Rush
    if (this.surgePhase !== "NONE") {
      this.updateSurge(dt);
      return;
    }

    this.surgeCooldown -= dt;
    if (this.surgeCooldown <= 0) {
      this.surgeCooldown = 7.5;
      this.surgePhase = "TELEGRAPH";
      this.surgeTimer = 0.6;
      this.onSurgeTelegraphCallback?.();
      return;
    }

    // Faster vertical oscillation and gentle X drift
    this.position.y = 45 + 24 * Math.sin(this.hoverTime * 1.7);
    this.position.x = 133 + 4 * Math.sin(this.hoverTime * 0.9);

    // Alternating cannons with higher frequency
    this.cannonTimer -= dt;
    if (this.cannonTimer <= 0) {
      this.cannonTimer = 0.95;
      const muzzleY = this.position.y + (Math.sin(this.hoverTime * 3) > 0 ? 6 : -6);
      ctx.spawnEnemyProjectile(this.position.x - 14, muzzleY, -85, 0);
      this.onBossShootCallback?.();
    }

    // 5-Way Sweeping Arc
    this.spreadTimer -= dt;
    if (this.spreadTimer <= 0) {
      this.spreadTimer = 3.2;
      this.fireSpreadSalvo(ctx, 5, 70, 0.42);
      this.onBossShootCallback?.();
    }
  }

  private updateSurge(dt: number): void {
    switch (this.surgePhase) {
      case "TELEGRAPH":
        this.surgeTimer -= dt;
        // Visual vibration during telegraph
        this.position.x = 135 + (Math.random() - 0.5) * 1.5;
        if (this.surgeTimer <= 0) {
          this.surgePhase = "RUSH";
          this.surgeTimer = 0.45;
        }
        break;

      case "RUSH":
        this.position.x -= 110 * dt;
        if (this.position.x <= 85) {
          this.position.x = 85;
          this.surgePhase = "RETURN";
        }
        break;

      case "RETURN":
        this.position.x += 35 * dt;
        if (this.position.x >= 134) {
          this.position.x = 134;
          this.surgePhase = "NONE";
        }
        break;
    }
  }

  private updateEnraged(dt: number, ctx: BehaviorContext): void {
    this.hoverTime += dt;

    // Aggressive vertical tracking toward player position
    const targetY = Math.max(16, Math.min(74, ctx.playerPosition.y));
    const dy = targetY - this.position.y;
    this.position.y += Math.sign(dy) * Math.min(Math.abs(dy), 38 * dt);

    // Rapid dual cannon fire
    this.cannonTimer -= dt;
    if (this.cannonTimer <= 0) {
      this.cannonTimer = 0.7;
      ctx.spawnEnemyProjectile(this.position.x - 14, this.position.y + 6, -95, 0);
      ctx.spawnEnemyProjectile(this.position.x - 14, this.position.y - 6, -95, 0);
      this.onBossShootCallback?.();
    }

    // Rapid 3-way spreading salvo
    this.spreadTimer -= dt;
    if (this.spreadTimer <= 0) {
      this.spreadTimer = 1.8;
      this.fireSpreadSalvo(ctx, 3, 80, 0.32);
      this.onBossShootCallback?.();
    }
  }

  private updateDefeated(
    dt: number,
    onExplosion: (x: number, y: number, count: number) => void,
    onShake: (intensity: number, duration: number) => void
  ): void {
    this.defeatTimer += dt;
    this.defeatExplosionCooldown -= dt;

    // Trigger intermittent cascading explosions across the hull
    if (this.defeatExplosionCooldown <= 0 && this.defeatTimer < 2.3) {
      this.defeatExplosionCooldown = 0.14;
      const randX = this.position.x + (Math.random() - 0.5) * (this.width - 4);
      const randY = this.position.y + (Math.random() - 0.5) * (this.height - 4);
      onExplosion(randX, randY, 8);
      onShake(1.2, 0.12);
      this.onHeavyExplosionCallback?.();
    }

    // Final massive detonation at 2.4s
    if (this.defeatTimer >= 2.4) {
      onExplosion(this.position.x, this.position.y, 25);
      onShake(3.5, 0.5);
      this.onHeavyExplosionCallback?.();
      this.active = false;
      this.onDefeatedCallback?.();
    }
  }

  private fireSpreadSalvo(
    ctx: BehaviorContext,
    count: number,
    speed: number,
    maxAngleRad: number
  ): void {
    if (count <= 1) {
      ctx.spawnEnemyProjectile(this.position.x - 14, this.position.y, -speed, 0);
      return;
    }

    const step = (maxAngleRad * 2) / (count - 1);
    for (let i = 0; i < count; i++) {
      const angle = -maxAngleRad + i * step;
      const vx = -speed * Math.cos(angle);
      const vy = speed * Math.sin(angle);
      ctx.spawnEnemyProjectile(this.position.x - 14, this.position.y, vx, vy);
    }
  }

  destroy(): void {
    this.active = false;
    this.state = "INACTIVE";
  }
}
