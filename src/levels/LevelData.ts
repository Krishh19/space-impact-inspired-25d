import type { EnemyArchetype } from "../core/Types";

export interface EnemySpawnData {
  archetype: EnemyArchetype;
  offsetX?: number;
  offsetY?: number;
  speed?: number;
  hp?: number;
  score?: number;
}

export type LevelEventType =
  | "stage_title"
  | "banner"
  | "wave"
  | "recovery"
  | "elite"
  | "boss_warning"
  | "boss";

export interface BaseEvent {
  time: number;
  type: LevelEventType;
}

export interface StageTitleEvent extends BaseEvent {
  type: "stage_title";
  title: string;
  subtitle: string;
  duration?: number;
}

export interface BannerEvent extends BaseEvent {
  type: "banner";
  text: string;
  duration?: number;
}

export interface WaveEvent extends BaseEvent {
  type: "wave";
  baseX?: number;
  baseY?: number;
  enemies: EnemySpawnData[];
}

export interface RecoveryEvent extends BaseEvent {
  type: "recovery";
  duration: number;
  message?: string;
}

export interface EliteEvent extends BaseEvent {
  type: "elite";
  archetype: EnemyArchetype;
  baseX?: number;
  baseY?: number;
  hp: number;
  speed?: number;
  score: number;
  message?: string;
}

export interface BossWarningEvent extends BaseEvent {
  type: "boss_warning";
  warningText: string;
  duration?: number;
}

export interface BossEvent extends BaseEvent {
  type: "boss";
  bossId: "titan_warden";
  name: string;
  hp: number;
}

export type LevelEvent =
  | StageTitleEvent
  | BannerEvent
  | WaveEvent
  | RecoveryEvent
  | EliteEvent
  | BossWarningEvent
  | BossEvent;

export interface LevelDefinition {
  id: string;
  title: string;
  subtitle: string;
  events: LevelEvent[];
}
