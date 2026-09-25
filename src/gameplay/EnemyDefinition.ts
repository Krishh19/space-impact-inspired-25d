import {
  CHASER_HEIGHT,
  CHASER_HP,
  CHASER_SCORE,
  CHASER_SPEED,
  CHASER_WIDTH,
  SCOUT_HEIGHT,
  SCOUT_HP,
  SCOUT_SCORE,
  SCOUT_SPEED,
  SCOUT_WIDTH,
  SWOOPER_HEIGHT,
  SWOOPER_HP,
  SWOOPER_SCORE,
  SWOOPER_SPEED,
  SWOOPER_WIDTH,
  WEAVER_HEIGHT,
  WEAVER_HP,
  WEAVER_SCORE,
  WEAVER_SPEED,
  WEAVER_WIDTH,
} from "../core/Constants";
import type { EnemyArchetype } from "../core/Types";
import type { AttackBehavior } from "./attacks/AttackBehavior";
import { BurstAttack } from "./attacks/BurstAttack";
import { ContactAttack } from "./attacks/ContactAttack";
import { StraightAttack } from "./attacks/StraightAttack";
import { ChaseMovement } from "./behaviors/ChaseMovement";
import { DiveMovement } from "./behaviors/DiveMovement";
import type { MovementBehavior } from "./behaviors/MovementBehavior";
import { SineMovement } from "./behaviors/SineMovement";
import { StraightMovement } from "./behaviors/StraightMovement";

export interface EnemyDefinition {
  archetype: EnemyArchetype;
  width: number;
  height: number;
  hp: number;
  speed: number;
  score: number;
  createMovement: () => MovementBehavior;
  createAttack: () => AttackBehavior;
}

export const ENEMY_DEFINITIONS: Record<EnemyArchetype, EnemyDefinition> = {
  scout: {
    archetype: "scout",
    width: SCOUT_WIDTH,
    height: SCOUT_HEIGHT,
    hp: SCOUT_HP,
    speed: SCOUT_SPEED,
    score: SCOUT_SCORE,
    createMovement: () => new StraightMovement(),
    createAttack: () => new ContactAttack(),
  },
  weaver: {
    archetype: "weaver",
    width: WEAVER_WIDTH,
    height: WEAVER_HEIGHT,
    hp: WEAVER_HP,
    speed: WEAVER_SPEED,
    score: WEAVER_SCORE,
    createMovement: () => new SineMovement(16, 3.0),
    createAttack: () => new StraightAttack(0.8, 1.8),
  },
  swooper: {
    archetype: "swooper",
    width: SWOOPER_WIDTH,
    height: SWOOPER_HEIGHT,
    hp: SWOOPER_HP,
    speed: SWOOPER_SPEED,
    score: SWOOPER_SCORE,
    createMovement: () => new DiveMovement(),
    createAttack: () => new ContactAttack(),
  },
  chaser: {
    archetype: "chaser",
    width: CHASER_WIDTH,
    height: CHASER_HEIGHT,
    hp: CHASER_HP,
    speed: CHASER_SPEED,
    score: CHASER_SCORE,
    createMovement: () => new ChaseMovement(24),
    createAttack: () => new BurstAttack(1.0, 2.4),
  },
};
