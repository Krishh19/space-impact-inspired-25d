import type { Game } from "../core/Game";
import type { GameState } from "../core/Types";
import type { LevelEventDispatcher } from "../levels/LevelDirector";
import type { GameSettings } from "../systems/SettingsManager";

export class HudOverlay implements LevelEventDispatcher {
  private readonly container: HTMLElement;
  private readonly titleScreen: HTMLElement;
  private readonly playingScreen: HTMLElement;
  private readonly gameOverScreen: HTMLElement;
  private readonly victoryScreen: HTMLElement;
  private readonly pauseScreen: HTMLElement;

  // Modals
  private readonly howToPlayModal: HTMLElement;
  private readonly settingsModal: HTMLElement;

  // HUD elements
  private readonly livesEl: HTMLElement;
  private readonly scoreEl: HTMLElement;
  private readonly hiScoreEl: HTMLElement;
  private readonly titleHiScoreEl: HTMLElement;
  private readonly finalScoreEl: HTMLElement;
  private readonly finalHiScoreEl: HTMLElement;
  private readonly victoryScoreEl: HTMLElement;
  private readonly victoryHiScoreEl: HTMLElement;

  // Victory Stats elements
  private readonly victoryRankEl: HTMLElement;
  private readonly victoryKillsEl: HTMLElement;
  private readonly victoryAccuracyEl: HTMLElement;
  private readonly victoryTimeEl: HTMLElement;

  // Quick HUD icon controls
  private readonly quickMuteBtn: HTMLButtonElement;
  private readonly quickPauseBtn: HTMLButtonElement;

  // Level 1 Stage & Tactical Banners
  private readonly stageTitleEl: HTMLElement;
  private readonly stageTitleMainEl: HTMLElement;
  private readonly stageTitleSubEl: HTMLElement;
  private readonly bannerEl: HTMLElement;
  private readonly warningEl: HTMLElement;
  private readonly warningBodyEl: HTMLElement;

  // Boss Gauge
  private readonly bossContainerEl: HTMLElement;
  private readonly bossBarFillEl: HTMLElement;
  private readonly bossNameLabelEl: HTMLElement;
  private readonly bossStatusLabelEl: HTMLElement;

  // Settings Buttons (sync with SettingsManager)
  private readonly settingSoundBtns: HTMLButtonElement[] = [];
  private readonly settingVolumeBtns: HTMLButtonElement[] = [];
  private readonly settingShakeBtns: HTMLButtonElement[] = [];
  private readonly settingBezelBtns: HTMLButtonElement[] = [];

  private stageTitleTimer = 0;
  private bannerTimer = 0;
  private warningTimer = 0;

  private lastState: GameState | null = null;
  private lastScore = -1;
  private lastLives = -1;
  private lastHiScore = -1;

  private game: Game | null = null;
  private settingsUnsubscribe: (() => void) | null = null;

  constructor(parent: HTMLElement, game?: Game) {
    this.container = document.createElement("div");
    this.container.className = "hud-overlay";

    // 1. Title Screen
    this.titleScreen = document.createElement("div");
    this.titleScreen.className = "screen title-screen";
    this.titleScreen.innerHTML = `
      <div class="logo">STARFALL 84</div>
      <div class="sublogo">2.5D MONOCHROME ARCADE SHOOTER</div>
      <div class="menu-list">
        <button class="menu-btn start-mission-btn">START MISSION</button>
        <button class="menu-btn how-to-play-btn">HOW TO PLAY</button>
        <button class="menu-btn title-settings-btn">SETTINGS</button>
      </div>
      <div class="prompt blink">PRESS ENTER OR SPACE TO START</div>
      <div class="hi-score-display title-hi-score">HI-SCORE: 000000</div>
      <div class="controls-guide">
        <span>MOVE: WASD / ARROW KEYS</span>
        <span>FIRE: SPACE / Z | PAUSE: ESC / P</span>
      </div>
    `;

    // 2. Playing HUD
    this.playingScreen = document.createElement("div");
    this.playingScreen.className = "screen playing-hud";
    this.playingScreen.innerHTML = `
      <div class="hud-bar">
        <div class="hud-lives">LIVES: <span class="lives-val">♥♥♥</span></div>
        <div class="hud-hiscore">HI: <span class="hiscore-val">000000</span></div>
        <div class="hud-score">SCORE: <span class="score-val">000000</span></div>
        <div class="hud-quick-controls">
          <button class="hud-icon-btn mute-icon-btn" title="Toggle Sound (M)">🔊</button>
          <button class="hud-icon-btn pause-icon-btn" title="Pause Game (ESC / P)">⏸</button>
        </div>
      </div>
      <div class="stage-title-banner" style="display: none;">
        <div class="stage-title-main">STAGE 1</div>
        <div class="stage-title-sub">VERDANT ORBIT</div>
      </div>
      <div class="tactical-banner" style="display: none;">VANGUARD PATROL DETECTED</div>
      <div class="boss-warning-banner" style="display: none;">
        <div class="warning-header">⚠ WARNING ⚠</div>
        <div class="warning-body">MASSIVE SIGNATURE DETECTED</div>
      </div>
      <div class="boss-health-container" style="display: none;">
        <div class="boss-name-line">
          <span class="boss-name-label">TITAN WARDEN</span>
          <span class="boss-status-label">// ARMORED COMMAND DRONE</span>
        </div>
        <div class="boss-bar-track">
          <div class="boss-bar-fill"></div>
        </div>
      </div>
    `;

    // 3. Pause Screen
    this.pauseScreen = document.createElement("div");
    this.pauseScreen.className = "screen pause-screen";
    this.pauseScreen.innerHTML = `
      <div class="pause-title">PAUSED</div>
      <div class="pause-box">
        <button class="menu-btn pause-resume-btn">RESUME MISSION [P]</button>
        <button class="menu-btn pause-sound-btn">SOUND: ON</button>
        <button class="menu-btn pause-volume-btn">VOL: 50%</button>
        <button class="menu-btn pause-shake-btn">SHAKE: FULL</button>
        <button class="menu-btn pause-bezel-btn">BEZEL: OFF</button>
        <button class="menu-btn pause-restart-btn">RESTART MISSION</button>
        <button class="menu-btn pause-quit-btn">ABORT TO TITLE</button>
      </div>
    `;

    // 4. Game Over Screen
    this.gameOverScreen = document.createElement("div");
    this.gameOverScreen.className = "screen game-over-screen";
    this.gameOverScreen.innerHTML = `
      <div class="game-over-title">GAME OVER</div>
      <div class="final-score-line">FINAL SCORE: <span class="final-score-val">000000</span></div>
      <div class="final-hiscore-line">HIGH SCORE: <span class="final-hiscore-val">000000</span></div>
      <div class="prompt blink">PRESS ENTER OR SPACE TO RESTART</div>
    `;

    // 5. Victory Screen
    this.victoryScreen = document.createElement("div");
    this.victoryScreen.className = "screen victory-screen";
    this.victoryScreen.innerHTML = `
      <div class="victory-banner-badge">MISSION ACCOMPLISHED</div>
      <div class="victory-title">STAGE 1 CLEAR</div>
      <div class="victory-sub">VERDANT ORBIT SECURED</div>
      <div class="victory-stats">
        <div class="stat-row"><span>COMBAT EVALUATION:</span><span class="rank-val victory-rank-val">RANK S</span></div>
        <div class="stat-row"><span>ENEMIES NEUTRALIZED:</span><span class="victory-kills-val">0 / 0</span></div>
        <div class="stat-row"><span>FIRING ACCURACY:</span><span class="victory-accuracy-val">0%</span></div>
        <div class="stat-row"><span>MISSION TIME:</span><span class="victory-time-val">00:00</span></div>
        <div class="stat-row"><span>STAGE BONUS:</span><span class="bonus-val">+5000</span></div>
        <div class="stat-row"><span>TOTAL SCORE:</span><span class="victory-score-val">000000</span></div>
        <div class="stat-row"><span>HIGH SCORE:</span><span class="victory-hiscore-val">000000</span></div>
      </div>
      <div class="prompt blink">PRESS ENTER OR SPACE TO CONTINUE</div>
    `;

    // 6. How to Play Modal
    this.howToPlayModal = document.createElement("div");
    this.howToPlayModal.className = "modal how-to-play-modal";
    this.howToPlayModal.style.display = "none";
    this.howToPlayModal.innerHTML = `
      <div class="modal-box">
        <div class="modal-header">TACTICAL BRIEFING // FLIGHT MANUAL</div>
        <div class="modal-body">
          <div class="guide-item"><span>FLIGHT CONTROLS:</span><span>WASD / ARROW KEYS</span></div>
          <div class="guide-item"><span>PRIMARY WEAPON:</span><span>SPACE / Z</span></div>
          <div class="guide-item"><span>TACTICAL PAUSE:</span><span>ESC / P</span></div>
          <div class="guide-item"><span>AUDIO TOGGLE:</span><span>M</span></div>
          <div class="guide-briefing">
            INFILTRATE VERDANT ORBIT. NEUTRALIZE HOSTILE VANGUARD SQUADRONS. PREPARE FOR ENCOUNTER WITH THE TITAN WARDEN ARMORED DRONE PLATFORM.
          </div>
        </div>
        <button class="menu-btn modal-close-btn how-to-play-close-btn">CLOSE [ESC]</button>
      </div>
    `;

    // 7. Settings Modal
    this.settingsModal = document.createElement("div");
    this.settingsModal.className = "modal settings-modal";
    this.settingsModal.style.display = "none";
    this.settingsModal.innerHTML = `
      <div class="modal-box">
        <div class="modal-header">SYSTEM CONFIGURATION</div>
        <div class="modal-body">
          <div class="guide-item">
            <span>AUDIO:</span>
            <button class="menu-btn modal-sound-btn">SOUND: ON</button>
          </div>
          <div class="guide-item">
            <span>VOLUME:</span>
            <button class="menu-btn modal-volume-btn">VOL: 50%</button>
          </div>
          <div class="guide-item">
            <span>SCREEN SHAKE:</span>
            <button class="menu-btn modal-shake-btn">SHAKE: FULL</button>
          </div>
          <div class="guide-item">
            <span>LCD BEZEL HOUSING:</span>
            <button class="menu-btn modal-bezel-btn">BEZEL: OFF</button>
          </div>
        </div>
        <button class="menu-btn modal-close-btn settings-close-btn">CLOSE [ESC]</button>
      </div>
    `;

    this.container.appendChild(this.titleScreen);
    this.container.appendChild(this.playingScreen);
    this.container.appendChild(this.pauseScreen);
    this.container.appendChild(this.gameOverScreen);
    this.container.appendChild(this.victoryScreen);
    this.container.appendChild(this.howToPlayModal);
    this.container.appendChild(this.settingsModal);
    parent.appendChild(this.container);

    // Queries
    this.livesEl = this.playingScreen.querySelector(".lives-val")!;
    this.scoreEl = this.playingScreen.querySelector(".score-val")!;
    this.hiScoreEl = this.playingScreen.querySelector(".hiscore-val")!;
    this.titleHiScoreEl = this.titleScreen.querySelector(".title-hi-score")!;
    this.finalScoreEl = this.gameOverScreen.querySelector(".final-score-val")!;
    this.finalHiScoreEl = this.gameOverScreen.querySelector(".final-hiscore-val")!;
    this.victoryScoreEl = this.victoryScreen.querySelector(".victory-score-val")!;
    this.victoryHiScoreEl = this.victoryScreen.querySelector(".victory-hiscore-val")!;

    this.victoryRankEl = this.victoryScreen.querySelector(".victory-rank-val")!;
    this.victoryKillsEl = this.victoryScreen.querySelector(".victory-kills-val")!;
    this.victoryAccuracyEl = this.victoryScreen.querySelector(".victory-accuracy-val")!;
    this.victoryTimeEl = this.victoryScreen.querySelector(".victory-time-val")!;

    this.quickMuteBtn = this.playingScreen.querySelector(".mute-icon-btn")!;
    this.quickPauseBtn = this.playingScreen.querySelector(".pause-icon-btn")!;

    this.stageTitleEl = this.playingScreen.querySelector(".stage-title-banner")!;
    this.stageTitleMainEl = this.playingScreen.querySelector(".stage-title-main")!;
    this.stageTitleSubEl = this.playingScreen.querySelector(".stage-title-sub")!;
    this.bannerEl = this.playingScreen.querySelector(".tactical-banner")!;
    this.warningEl = this.playingScreen.querySelector(".boss-warning-banner")!;
    this.warningBodyEl = this.playingScreen.querySelector(".warning-body")!;
    this.bossContainerEl = this.playingScreen.querySelector(".boss-health-container")!;
    this.bossBarFillEl = this.playingScreen.querySelector(".boss-bar-fill")!;
    this.bossNameLabelEl = this.playingScreen.querySelector(".boss-name-label")!;
    this.bossStatusLabelEl = this.playingScreen.querySelector(".boss-status-label")!;

    // Collect settings buttons
    const pauseSoundBtn = this.pauseScreen.querySelector(".pause-sound-btn") as HTMLButtonElement;
    const modalSoundBtn = this.settingsModal.querySelector(".modal-sound-btn") as HTMLButtonElement;
    if (pauseSoundBtn) this.settingSoundBtns.push(pauseSoundBtn);
    if (modalSoundBtn) this.settingSoundBtns.push(modalSoundBtn);

    const pauseVolBtn = this.pauseScreen.querySelector(".pause-volume-btn") as HTMLButtonElement;
    const modalVolBtn = this.settingsModal.querySelector(".modal-volume-btn") as HTMLButtonElement;
    if (pauseVolBtn) this.settingVolumeBtns.push(pauseVolBtn);
    if (modalVolBtn) this.settingVolumeBtns.push(modalVolBtn);

    const pauseShakeBtn = this.pauseScreen.querySelector(".pause-shake-btn") as HTMLButtonElement;
    const modalShakeBtn = this.settingsModal.querySelector(".modal-shake-btn") as HTMLButtonElement;
    if (pauseShakeBtn) this.settingShakeBtns.push(pauseShakeBtn);
    if (modalShakeBtn) this.settingShakeBtns.push(modalShakeBtn);

    const pauseBezelBtn = this.pauseScreen.querySelector(".pause-bezel-btn") as HTMLButtonElement;
    const modalBezelBtn = this.settingsModal.querySelector(".modal-bezel-btn") as HTMLButtonElement;
    if (pauseBezelBtn) this.settingBezelBtns.push(pauseBezelBtn);
    if (modalBezelBtn) this.settingBezelBtns.push(modalBezelBtn);

    this.setupEvents();

    if (game) {
      this.attachGame(game);
    }
  }

  private setupEvents(): void {
    // Title buttons
    const startMissionBtn = this.titleScreen.querySelector(".start-mission-btn");
    startMissionBtn?.addEventListener("click", () => {
      this.game?.getAudio().playMenuSelect();
      this.game?.startGame();
    });

    const howToPlayBtn = this.titleScreen.querySelector(".how-to-play-btn");
    howToPlayBtn?.addEventListener("click", () => {
      this.game?.getAudio().playMenuSelect();
      this.howToPlayModal.style.display = "flex";
    });

    const titleSettingsBtn = this.titleScreen.querySelector(".title-settings-btn");
    titleSettingsBtn?.addEventListener("click", () => {
      this.game?.getAudio().playMenuSelect();
      this.settingsModal.style.display = "flex";
    });

    // Modal Close buttons
    const howToPlayClose = this.howToPlayModal.querySelector(".how-to-play-close-btn");
    howToPlayClose?.addEventListener("click", () => {
      this.game?.getAudio().playMenuSelect();
      this.howToPlayModal.style.display = "none";
    });

    const settingsClose = this.settingsModal.querySelector(".settings-close-btn");
    settingsClose?.addEventListener("click", () => {
      this.game?.getAudio().playMenuSelect();
      this.settingsModal.style.display = "none";
    });

    // Quick HUD controls
    this.quickMuteBtn.addEventListener("click", () => {
      this.game?.getAudio().playMenuMove();
      this.game?.getSettings().toggleMute();
    });

    this.quickPauseBtn.addEventListener("click", () => {
      this.game?.togglePause();
    });

    // Pause Screen buttons
    const resumeBtn = this.pauseScreen.querySelector(".pause-resume-btn");
    resumeBtn?.addEventListener("click", () => {
      this.game?.resumeGame();
    });

    const restartBtn = this.pauseScreen.querySelector(".pause-restart-btn");
    restartBtn?.addEventListener("click", () => {
      this.game?.getAudio().playMenuSelect();
      this.game?.startGame();
    });

    const quitBtn = this.pauseScreen.querySelector(".pause-quit-btn");
    quitBtn?.addEventListener("click", () => {
      this.game?.getAudio().playMenuSelect();
      this.game?.resetToTitle();
    });

    // Settings toggle buttons
    for (const btn of this.settingSoundBtns) {
      btn.addEventListener("click", () => {
        this.game?.getAudio().playMenuMove();
        this.game?.getSettings().toggleMute();
      });
    }

    for (const btn of this.settingVolumeBtns) {
      btn.addEventListener("click", () => {
        this.game?.getAudio().playMenuMove();
        this.game?.getSettings().cycleVolume();
      });
    }

    for (const btn of this.settingShakeBtns) {
      btn.addEventListener("click", () => {
        this.game?.getAudio().playMenuMove();
        this.game?.getSettings().cycleScreenShake();
      });
    }

    for (const btn of this.settingBezelBtns) {
      btn.addEventListener("click", () => {
        this.game?.getAudio().playMenuMove();
        this.game?.getSettings().toggleBezel();
      });
    }

    // Keyboard shortcuts (Escape for modals / pause, M for mute)
    window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        if (this.howToPlayModal.style.display === "flex") {
          this.howToPlayModal.style.display = "none";
          this.game?.getAudio().playMenuSelect();
          return;
        }
        if (this.settingsModal.style.display === "flex") {
          this.settingsModal.style.display = "none";
          this.game?.getAudio().playMenuSelect();
          return;
        }
      }

      if (e.code === "KeyM") {
        if (!e.repeat) {
          this.game?.getAudio().playMenuMove();
          this.game?.getSettings().toggleMute();
        }
      }
    });
  }

  attachGame(game: Game): void {
    if (this.game === game) return;
    this.game = game;

    if (this.settingsUnsubscribe) {
      this.settingsUnsubscribe();
    }

    this.settingsUnsubscribe = game.getSettings().subscribe((s) => {
      this.applySettingsUI(s);
    });
  }

  private applySettingsUI(s: GameSettings): void {
    const soundText = `SOUND: ${s.muted ? "OFF" : "ON"}`;
    for (const btn of this.settingSoundBtns) {
      btn.textContent = soundText;
    }
    this.quickMuteBtn.textContent = s.muted ? "🔇" : "🔊";

    const volText = `VOL: ${Math.round(s.volume * 100)}%`;
    for (const btn of this.settingVolumeBtns) {
      btn.textContent = volText;
    }

    const shakeText = `SHAKE: ${s.screenShake.toUpperCase()}`;
    for (const btn of this.settingShakeBtns) {
      btn.textContent = shakeText;
    }

    const bezelText = `BEZEL: ${s.bezelFrame ? "ON" : "OFF"}`;
    for (const btn of this.settingBezelBtns) {
      btn.textContent = bezelText;
    }

    // Update handheld bezel CSS class on container
    const gameContainer = this.container.closest(".game-container") || document.querySelector(".game-container");
    gameContainer?.classList.toggle("bezel-mode", s.bezelFrame);
  }

  showStageTitle(title: string, subtitle: string, duration = 3.0): void {
    this.stageTitleMainEl.textContent = title;
    this.stageTitleSubEl.textContent = subtitle;
    this.stageTitleEl.style.display = "flex";
    this.stageTitleEl.style.opacity = "1";
    this.stageTitleTimer = duration;
  }

  showBanner(text: string, duration = 2.0): void {
    this.bannerEl.textContent = text;
    this.bannerEl.style.display = "block";
    this.bannerEl.style.opacity = "1";
    this.bannerTimer = duration;
  }

  showBossWarning(warningText: string, duration = 4.0): void {
    this.warningBodyEl.textContent = warningText;
    this.warningEl.style.display = "flex";
    this.warningTimer = duration;
  }

  clearBanners(): void {
    this.stageTitleTimer = 0;
    this.bannerTimer = 0;
    this.warningTimer = 0;
    this.stageTitleEl.style.display = "none";
    this.bannerEl.style.display = "none";
    this.warningEl.style.display = "none";
  }

  update(game: Game, dt = 0): void {
    if (!this.game) {
      this.attachGame(game);
    }

    const state = game.getState();
    const score = game.getScore();
    const hiScore = game.getHighScore();
    const lives = game.getPlayer().lives;

    // Toggle screen visibility on state change
    if (state !== this.lastState) {
      this.titleScreen.style.display = state === "TITLE" ? "flex" : "none";
      this.playingScreen.style.display = (state === "PLAYING" || state === "PAUSED") ? "block" : "none";
      this.pauseScreen.style.display = state === "PAUSED" ? "flex" : "none";
      this.gameOverScreen.style.display = state === "GAME_OVER" ? "flex" : "none";
      this.victoryScreen.style.display = state === "VICTORY" ? "flex" : "none";

      if (state !== "PLAYING" && state !== "PAUSED") {
        this.clearBanners();
        this.bossContainerEl.style.display = "none";
      }

      if (state === "VICTORY") {
        const stats = game.getCombatStats();
        this.victoryRankEl.textContent = `RANK ${stats.rank}`;
        this.victoryKillsEl.textContent = `${stats.enemiesDestroyed} / ${stats.totalEnemiesSpawned}`;
        const accPct = stats.shotsFired > 0 ? Math.round((stats.shotsHit / stats.shotsFired) * 100) : 0;
        this.victoryAccuracyEl.textContent = `${accPct}%`;
        this.victoryTimeEl.textContent = this.formatTime(stats.elapsedTime);
      }

      this.lastState = state;
    }

    if (state === "TITLE") {
      if (hiScore !== this.lastHiScore) {
        this.titleHiScoreEl.textContent = `HI-SCORE: ${this.formatScore(hiScore)}`;
      }
    } else if (state === "PLAYING" || state === "PAUSED") {
      if (score !== this.lastScore) {
        this.scoreEl.textContent = this.formatScore(score);
        this.lastScore = score;
      }
      if (hiScore !== this.lastHiScore) {
        this.hiScoreEl.textContent = this.formatScore(hiScore);
      }
      if (lives !== this.lastLives) {
        this.livesEl.textContent = "♥".repeat(Math.max(0, lives));
        this.lastLives = lives;
      }

      // Boss Health Gauge synchronization
      const boss = game.getBoss();
      if (boss && boss.active) {
        this.bossContainerEl.style.display = "flex";
        const hpPct = Math.round(boss.getHpPercent() * 100);
        this.bossBarFillEl.style.width = `${hpPct}%`;
        this.bossContainerEl.classList.toggle("enraged", boss.isEnraged);
      } else {
        this.bossContainerEl.style.display = "none";
      }

      if (state === "PLAYING") {
        // Update banner timers during active play
        if (this.stageTitleTimer > 0) {
          this.stageTitleTimer -= dt;
          if (this.stageTitleTimer <= 0) {
            this.stageTitleEl.style.display = "none";
          }
        }

        if (this.bannerTimer > 0) {
          this.bannerTimer -= dt;
          if (this.bannerTimer <= 0) {
            this.bannerEl.style.display = "none";
          }
        }

        if (this.warningTimer > 0) {
          this.warningTimer -= dt;
          if (this.warningTimer <= 0) {
            this.warningEl.style.display = "none";
          }
        }
      }
    } else if (state === "GAME_OVER") {
      this.finalScoreEl.textContent = this.formatScore(score);
      this.finalHiScoreEl.textContent = this.formatScore(hiScore);
    } else if (state === "VICTORY") {
      this.victoryScoreEl.textContent = this.formatScore(score);
      this.victoryHiScoreEl.textContent = this.formatScore(hiScore);
    }

    this.lastHiScore = hiScore;
  }

  private formatScore(val: number): string {
    return val.toString().padStart(6, "0");
  }

  private formatTime(sec: number): string {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
}
