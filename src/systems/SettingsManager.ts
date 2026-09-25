import type { Difficulty, GameMode, SkinId, ThemeId } from "../core/Types";

export type ScreenShakeMode = "full" | "reduced" | "off";

export interface GameSettings {
  muted: boolean;
  volume: number; // 0.0 to 1.0
  screenShake: ScreenShakeMode;
  bezelFrame: boolean;
  theme: ThemeId;
  gameMode: GameMode;
  difficulty: Difficulty;
  selectedStage: number; // 1, 2, 3
  unlockedStages: number; // 1, 2, 3
  selectedSkin: SkinId;
  unlockedSkins: SkinId[];
  coins: number;
  highScoreEndless: number;
  highestEndlessWave: number;
}

export class SettingsManager {
  private static readonly STORAGE_KEY = "starfall84_settings";

  private static createDefaultSettings(): GameSettings {
    return {
      muted: false,
      volume: 0.5,
      screenShake: "full",
      bezelFrame: false,
      theme: "verdant",
      gameMode: "CAMPAIGN",
      difficulty: "NORMAL",
      selectedStage: 1,
      unlockedStages: 1,
      selectedSkin: "alpha",
      unlockedSkins: ["alpha"],
      coins: 0,
      highScoreEndless: 0,
      highestEndlessWave: 0,
    };
  }

  private settings: GameSettings = SettingsManager.createDefaultSettings();

  private listeners: ((settings: GameSettings) => void)[] = [];

  constructor() {
    this.load();
  }

  load(): void {
    try {
      const saved = localStorage.getItem(SettingsManager.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.muted === "boolean") this.settings.muted = parsed.muted;
        if (typeof parsed.volume === "number") {
          this.settings.volume = Math.max(0, Math.min(1, parsed.volume));
        }
        if (["full", "reduced", "off"].includes(parsed.screenShake)) {
          this.settings.screenShake = parsed.screenShake;
        }
        if (typeof parsed.bezelFrame === "boolean") {
          this.settings.bezelFrame = parsed.bezelFrame;
        }
        if (["verdant", "amber", "ice", "obsidian"].includes(parsed.theme)) {
          this.settings.theme = parsed.theme;
        }
        if (["CAMPAIGN", "ENDLESS"].includes(parsed.gameMode)) {
          this.settings.gameMode = parsed.gameMode;
        }
        if (["NORMAL", "HARD"].includes(parsed.difficulty)) {
          this.settings.difficulty = parsed.difficulty;
        }
        if (typeof parsed.selectedStage === "number") {
          this.settings.selectedStage = Math.max(1, Math.min(3, parsed.selectedStage));
        }
        if (typeof parsed.unlockedStages === "number") {
          this.settings.unlockedStages = Math.max(1, Math.min(3, parsed.unlockedStages));
        }
        if (["alpha", "valkyrie", "phantom", "solaris"].includes(parsed.selectedSkin)) {
          this.settings.selectedSkin = parsed.selectedSkin;
        }
        if (Array.isArray(parsed.unlockedSkins)) {
          this.settings.unlockedSkins = parsed.unlockedSkins;
        }
        if (typeof parsed.coins === "number") {
          this.settings.coins = Math.max(0, parsed.coins);
        }
        if (typeof parsed.highScoreEndless === "number") {
          this.settings.highScoreEndless = Math.max(0, parsed.highScoreEndless);
        }
        if (typeof parsed.highestEndlessWave === "number") {
          this.settings.highestEndlessWave = Math.max(0, parsed.highestEndlessWave);
        }
      }
    } catch {
      // Fallback to defaults
    }
  }

  save(): void {
    try {
      localStorage.setItem(SettingsManager.STORAGE_KEY, JSON.stringify(this.settings));
    } catch {
      // Ignore storage errors in restrictive environments
    }
    this.notify();
  }

  getSettings(): Readonly<GameSettings> {
    return this.settings;
  }

  setMuted(muted: boolean): void {
    this.settings.muted = muted;
    this.save();
  }

  toggleMute(): boolean {
    this.settings.muted = !this.settings.muted;
    this.save();
    return this.settings.muted;
  }

  setVolume(vol: number): void {
    this.settings.volume = Math.max(0, Math.min(1, vol));
    this.save();
  }

  cycleVolume(): number {
    const steps = [0.25, 0.5, 0.75, 1.0];
    const currentIndex = steps.findIndex((v) => Math.abs(v - this.settings.volume) < 0.05);
    const nextIndex = (currentIndex + 1) % steps.length;
    this.settings.volume = steps[nextIndex];
    if (this.settings.muted) this.settings.muted = false;
    this.save();
    return this.settings.volume;
  }

  cycleScreenShake(): ScreenShakeMode {
    const modes: ScreenShakeMode[] = ["full", "reduced", "off"];
    const curIdx = modes.indexOf(this.settings.screenShake);
    this.settings.screenShake = modes[(curIdx + 1) % modes.length];
    this.save();
    return this.settings.screenShake;
  }

  toggleBezel(): boolean {
    this.settings.bezelFrame = !this.settings.bezelFrame;
    this.save();
    return this.settings.bezelFrame;
  }

  setTheme(theme: ThemeId): void {
    this.settings.theme = theme;
    this.save();
  }

  cycleTheme(): ThemeId {
    const themes: ThemeId[] = ["verdant", "amber", "ice", "obsidian"];
    const curIdx = themes.indexOf(this.settings.theme);
    this.settings.theme = themes[(curIdx + 1) % themes.length];
    this.save();
    return this.settings.theme;
  }

  setGameMode(mode: GameMode): void {
    this.settings.gameMode = mode;
    this.save();
  }

  setDifficulty(diff: Difficulty): void {
    this.settings.difficulty = diff;
    this.save();
  }

  toggleDifficulty(): Difficulty {
    this.settings.difficulty = this.settings.difficulty === "NORMAL" ? "HARD" : "NORMAL";
    this.save();
    return this.settings.difficulty;
  }

  setSelectedStage(stage: number): void {
    if (stage <= this.settings.unlockedStages) {
      this.settings.selectedStage = stage;
      this.save();
    }
  }

  unlockNextStage(stage: number): void {
    if (stage > this.settings.unlockedStages) {
      this.settings.unlockedStages = Math.min(3, stage);
      this.save();
    }
  }

  addCoins(amount: number): number {
    this.settings.coins += amount;
    this.save();
    return this.settings.coins;
  }

  spendCoins(amount: number): boolean {
    if (this.settings.coins >= amount) {
      this.settings.coins -= amount;
      this.save();
      return true;
    }
    return false;
  }

  unlockSkin(skin: SkinId, cost: number): boolean {
    if (this.settings.unlockedSkins.includes(skin)) {
      this.selectSkin(skin);
      return true;
    }
    if (this.spendCoins(cost)) {
      this.settings.unlockedSkins.push(skin);
      this.settings.selectedSkin = skin;
      this.save();
      return true;
    }
    return false;
  }

  selectSkin(skin: SkinId): void {
    if (this.settings.unlockedSkins.includes(skin)) {
      this.settings.selectedSkin = skin;
      this.save();
    }
  }

  updateEndlessRecord(score: number, wave: number): boolean {
    let isNewRecord = false;
    if (score > this.settings.highScoreEndless) {
      this.settings.highScoreEndless = score;
      isNewRecord = true;
    }
    if (wave > this.settings.highestEndlessWave) {
      this.settings.highestEndlessWave = wave;
      isNewRecord = true;
    }
    if (isNewRecord) {
      this.save();
    }
    return isNewRecord;
  }

  unlockAllContent(): void {
    this.settings.unlockedStages = 3;
    this.settings.unlockedSkins = ["alpha", "valkyrie", "phantom", "solaris"];
    this.settings.coins += 5000;
    this.save();
    this.notify();
  }

  resetSavedData(): void {
    try {
      localStorage.removeItem(SettingsManager.STORAGE_KEY);
    } catch {}
    this.settings = SettingsManager.createDefaultSettings();
    this.save();
    this.notify();
  }

  subscribe(listener: (settings: GameSettings) => void): () => void {
    this.listeners.push(listener);
    listener(this.settings);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener(this.settings);
    }
  }
}
