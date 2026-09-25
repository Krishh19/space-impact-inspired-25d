import { SCOUT_DESPAWN_X, SCOUT_SPEED } from "../core/Constants";
import type {
  BehaviorContext,
  BoundingBox,
  EnemyArchetype,
  Entity,
  GameVec2,
} from "../core/Types";
import type { AttackBehavior } from "./attacks/AttackBehavior";
import { BurstAttack } from "./attacks/BurstAttack";
import { ContactAttack } from "./attacks/ContactAttack";
import { StraightAttack } from "./attacks/StraightAttack";
import { ChaseMovement } from "./behaviors/ChaseMovement";
import { DiveMovement } from "./behaviors/DiveMovement";
import type { MovementBehavior } from "./behaviors/MovementBehavior";
import { SineMovement } from "./behaviors/SineMovement";
import { StraightMovement } from "./behaviors/StraightMovement";
import { ENEMY_DEFINITIONS } from "./EnemyDefinition";

export class Enemy implements Entity {
  readonly id: number;
  type: EnemyArchetype = "scout";
  active = false;
  readonly position: GameVec2 = { x: 0, y: 0 };
  readonly velocity: GameVec2 = { x: 0, y: 0 };
  width = 8;
  height = 6;
  hp = 1;
  maxHp = 1;
  scoreValue = 100;

  // Pre-allocated behavior instances to eliminate GC on spawn
  private readonly movements: Record<EnemyArchetype, MovementBehavior> = {
    scout: new StraightMovement(),
    weaver: new SineMovement(16, 2.8),
    swooper: new DiveMovement(),
    chaser: new ChaseMovement(22),
  };

  private readonly attacks: Record<EnemyArchetype, AttackBehavior> = {
    scout: new ContactAttack(),
    weaver: new StraightAttack(0.8, 1.8),
    swooper: new ContactAttack(),
    chaser: new BurstAttack(1.0, 2.4),
  };

  movement: MovementBehavior = this.movements.scout;
  attack: AttackBehavior = this.attacks.scout;

  constructor(id: number) {
    this.id = id;
  }

  spawn(
    archetype: EnemyArchetype,
    x: number,
    y: number,
    speedOverride?: number,
    hpOverride?: number,
    scoreOverride?: number
  ): void {
    const def = ENEMY_DEFINITIONS[archetype];
    this.type = archetype;
    this.position.x = x;
    this.position.y = y;

    const speed = speedOverride ?? def.speed;
    this.velocity.x = -speed;
    this.velocity.y = 0;

    this.width = def.width;
    this.height = def.height;
    this.hp = hpOverride ?? def.hp;
    this.maxHp = this.hp;
    this.scoreValue = scoreOverride ?? def.score;

    this.movement = this.movements[archetype];
    this.attack = this.attacks[archetype];

    if (this.movement.reset) {
      this.movement.reset(y);
    }
    if (this.attack.reset) {
      this.attack.reset();
    }

    this.active = true;
  }

  spawnScout(
    x: number,
    y: number,
    speed = SCOUT_SPEED,
    hp?: number,
    score?: number
  ): void {
    this.spawn("scout", x, y, speed, hp, score);
  }

  update(dt: number, ctx?: BehaviorContext): void {
    if (!this.active) return;

    this.movement.update(this.position, this.velocity, dt, ctx);

    if (ctx) {
      this.attack.update(this.position, dt, ctx);
    }

    if (this.position.x < SCOUT_DESPAWN_X) {
      this.destroy();
    }
  }

  takeDamage(amount: number): boolean {
    if (!this.active) return false;

    this.hp -= amount;
    if (this.hp <= 0) {
      this.destroy();
      return true;
    }
    return false;
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
