export class AudioManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  private muted = false;
  private volume = 0.3;

  constructor() {
    // Lazily initialized on first user gesture to comply with browser autoplay policies
  }

  private initContext(): boolean {
    if (this.ctx) {
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }
      return true;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return false;

      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Pre-generate 1-second white noise buffer for crisp explosions
      const bufferSize = this.ctx.sampleRate;
      this.noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = this.noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      return true;
    } catch {
      return false;
    }
  }

  unlock(): void {
    this.initContext();
  }

  playShoot(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "square";
    osc.frequency.setValueAtTime(460, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.07);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.07);
  }

  playEnemyShoot(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.08);

    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  playImpact(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(550, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.035);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.035);
  }

  playExplosion(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || !this.noiseBuffer || this.muted) return;

    const now = this.ctx.currentTime;
    const source = this.ctx.createBufferSource();
    source.buffer = this.noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(750, now);
    filter.frequency.exponentialRampToValueAtTime(80, now + 0.22);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    source.start(now);
    source.stop(now + 0.22);
  }

  playPlayerHit(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.exponentialRampToValueAtTime(75, now + 0.2);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.2);
  }

  playGameOver(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    const notes = [
      { freq: 220, duration: 0.15, time: now },
      { freq: 174, duration: 0.15, time: now + 0.16 },
      { freq: 130, duration: 0.35, time: now + 0.32 },
    ];

    for (const note of notes) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(note.freq, note.time);

      gain.gain.setValueAtTime(0.2, note.time);
      gain.gain.exponentialRampToValueAtTime(0.001, note.time + note.duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(note.time);
      osc.stop(note.time + note.duration);
    }
  }

  playWarningSiren(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const startTime = now + i * 0.35;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(700, startTime);
      osc.frequency.setValueAtTime(450, startTime + 0.16);

      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.setValueAtTime(0.12, startTime + 0.28);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.32);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(startTime);
      osc.stop(startTime + 0.32);
    }
  }

  playBossShoot(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(65, now + 0.14);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.14);
  }

  playBossHit(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.08);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  playBossSurge(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(480, now + 0.4);

    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.4);
  }

  playHeavyExplosion(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || !this.noiseBuffer || this.muted) return;

    const now = this.ctx.currentTime;
    const source = this.ctx.createBufferSource();
    source.buffer = this.noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(550, now);
    filter.frequency.exponentialRampToValueAtTime(40, now + 0.55);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.38, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    source.start(now);
    source.stop(now + 0.55);
  }

  playStageClear(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    const notes = [
      { freq: 261.63, time: now, dur: 0.12 },
      { freq: 329.63, time: now + 0.13, dur: 0.12 },
      { freq: 392.0, time: now + 0.26, dur: 0.12 },
      { freq: 523.25, time: now + 0.39, dur: 0.45 },
    ];

    for (const note of notes) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(note.freq, note.time);

      gain.gain.setValueAtTime(0.2, note.time);
      gain.gain.exponentialRampToValueAtTime(0.001, note.time + note.dur);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(note.time);
      osc.stop(note.time + note.dur);
    }
  }

  playMenuMove(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "square";
    osc.frequency.setValueAtTime(880, now);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.03);
  }

  playMenuSelect(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    const notes = [
      { freq: 520, time: now, dur: 0.04 },
      { freq: 1040, time: now + 0.04, dur: 0.06 },
    ];

    for (const note of notes) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(note.freq, note.time);

      gain.gain.setValueAtTime(0.12, note.time);
      gain.gain.exponentialRampToValueAtTime(0.001, note.time + note.dur);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(note.time);
      osc.stop(note.time + note.dur);
    }
  }

  playPause(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "square";
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(260, now + 0.07);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.07);
  }

  playUnpause(): void {
    if (!this.initContext() || !this.ctx || !this.masterGain || this.muted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "square";
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.07);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.07);
  }

  setVolume(v: number): void {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.masterGain && this.ctx && !this.muted) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime);
    }
  }

  isMuted(): boolean {
    return this.muted;
  }
}
