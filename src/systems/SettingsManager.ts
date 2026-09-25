export type ScreenShakeMode = "full" | "reduced" | "off";

export interface GameSettings {
  muted: boolean;
  volume: number; // 0.0 to 1.0
  screenShake: ScreenShakeMode;
  bezelFrame: boolean;
}

export class SettingsManager {
  private static readonly STORAGE_KEY = "starfall84_settings";

  private settings: GameSettings = {
    muted: false,
    volume: 0.5,
    screenShake: "full",
    bezelFrame: false,
  };

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
      }
    } catch {
      // Fallback to default settings
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
