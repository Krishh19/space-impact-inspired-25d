import type { AudioManager } from "../audio/AudioManager";
import type { EnemyPool } from "../gameplay/EnemyPool";
import type { LevelDefinition } from "./LevelData";
import level01Data from "../data/level01.json";
import level02Data from "../data/level02.json";
import level03Data from "../data/level03.json";

export interface LevelEventDispatcher {
  showStageTitle(title: string, subtitle: string, duration?: number): void;
  showBanner(text: string, duration?: number): void;
  showBossWarning(warningText: string, duration?: number): void;
  spawnBoss?(bossId: string, name: string, hp: number): void;
}

export class LevelDirector {
  private currentLevel: LevelDefinition = level01Data as unknown as LevelDefinition;
  private elapsedTime = 0;
  private nextEventIndex = 0;
  private active = false;

  startStage(stageNumber: number): void {
    if (stageNumber === 2) {
      this.startLevel(level02Data as unknown as LevelDefinition);
    } else if (stageNumber === 3) {
      this.startLevel(level03Data as unknown as LevelDefinition);
    } else {
      this.startLevel(level01Data as unknown as LevelDefinition);
    }
  }

  startLevel(level: LevelDefinition = level01Data as unknown as LevelDefinition): void {
    this.currentLevel = level;
    this.elapsedTime = 0;
    this.nextEventIndex = 0;
    this.active = true;
  }

  update(
    dt: number,
    enemyPool: EnemyPool,
    dispatcher: LevelEventDispatcher,
    audio: AudioManager
  ): void {
    if (!this.active) return;

    this.elapsedTime += dt;
    const events = this.currentLevel.events;

    while (
      this.nextEventIndex < events.length &&
      this.elapsedTime >= events[this.nextEventIndex].time
    ) {
      const event = events[this.nextEventIndex];
      this.nextEventIndex++;

      switch (event.type) {
        case "stage_title":
          dispatcher.showStageTitle(event.title, event.subtitle, event.duration);
          break;

        case "banner":
          dispatcher.showBanner(event.text, event.duration);
          break;

        case "wave": {
          const baseX = event.baseX ?? 170;
          const baseY = event.baseY ?? 45;
          for (const spawn of event.enemies) {
            const x = baseX + (spawn.offsetX ?? 0);
            const y = Math.max(10, Math.min(80, baseY + (spawn.offsetY ?? 0)));
            enemyPool.spawn(
              spawn.archetype,
              x,
              y,
              spawn.speed,
              spawn.hp,
              spawn.score
            );
          }
          break;
        }

        case "recovery":
          if (event.message) {
            dispatcher.showBanner(event.message, event.duration);
          }
          break;

        case "elite": {
          const baseX = event.baseX ?? 170;
          const baseY = event.baseY ?? 45;
          if (event.message) {
            dispatcher.showBanner(event.message, 3.0);
          }
          enemyPool.spawn(
            event.archetype,
            baseX,
            baseY,
            event.speed,
            event.hp,
            event.score
          );
          break;
        }

        case "boss_warning":
          dispatcher.showBossWarning(event.warningText, event.duration);
          audio.playWarningSiren();
          break;

        case "boss":
          dispatcher.spawnBoss?.(event.bossId, event.name, event.hp);
          break;
      }
    }

    // Do not loop waves once the boss is summoned
    if (this.nextEventIndex >= events.length) {
      const lastEvent = events[events.length - 1];
      if (lastEvent.type !== "boss" && this.elapsedTime >= lastEvent.time + 8.0) {
        this.elapsedTime = 16.0;
        this.nextEventIndex = 3;
      }
    }
  }

  reset(): void {
    this.elapsedTime = 0;
    this.nextEventIndex = 0;
    this.active = false;
  }

  seekTime(time: number): void {
    this.elapsedTime = time;
    const idx = this.currentLevel.events.findIndex((e) => e.time >= time);
    this.nextEventIndex = idx === -1 ? this.currentLevel.events.length : idx;
  }

  getElapsedTime(): number {
    return this.elapsedTime;
  }
}
