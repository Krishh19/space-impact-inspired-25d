export interface GameVec2 {
  x: number;
  y: number;
}

export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type GameState = "TITLE" | "PLAYING" | "PAUSED" | "GAME_OVER" | "VICTORY";
export type ProjectileOwner = "player" | "enemy";
export type EnemyArchetype = "scout" | "weaver" | "swooper" | "chaser";

export type GameMode = "CAMPAIGN" | "ENDLESS";
export type Difficulty = "NORMAL" | "HARD";
export type ThemeId = "verdant" | "amber" | "ice" | "obsidian";
export type SkinId = "alpha" | "valkyrie" | "phantom" | "solaris";
export type PowerupType = "spread" | "rapid" | "shield" | "bomb";
export type ItemType =
  | "coin"
  | "powerup_spread"
  | "powerup_rapid"
  | "powerup_shield"
  | "powerup_bomb";

export interface SkinDefinition {
  id: SkinId;
  name: string;
  cost: number;
  description: string;
  perk: string;
  speedMultiplier: number;
  hasStartingShield?: boolean;
}

export interface StageInfo {
  stageNumber: number;
  title: string;
  subtitle: string;
  theme: ThemeId;
  description: string;
}

export interface CombatStats {
  shotsFired: number;
  shotsHit: number;
  enemiesDestroyed: number;
  totalEnemiesSpawned: number;
  elapsedTime: number;
  rank: "S" | "A" | "B" | "C";
  coinsCollected?: number;
  waveReached?: number;
}

export interface BehaviorContext {
  readonly playerPosition: GameVec2;
  readonly spawnEnemyProjectile: (
    x: number,
    y: number,
    vx: number,
    vy: number
  ) => void;
}

export interface InputState {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
  fire: boolean;
  special: boolean;
  pause: boolean;
  start: boolean;
}

export interface Entity {
  id: number;
  active: boolean;
  update(dt: number): void;
  destroy(): void;
}
