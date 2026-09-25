import { CAMPAIGN_STAGES, SHIP_SKINS, THEME_PALETTES } from "../core/Constants";
import type { Game } from "../core/Game";
import type { GameState, SkinId } from "../core/Types";
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
  private readonly hangarModal: HTMLElement;
  private readonly modeSelectModal: HTMLElement;

  // Title Info
  private readonly titleHiScoreEl: HTMLElement;
  private readonly titleScrapEl: HTMLElement;
  private readonly titleModeEl: HTMLElement;

  // HUD elements
  private readonly livesEl: HTMLElement;
  private readonly scoreEl: HTMLElement;
  private readonly hiScoreEl: HTMLElement;
  private readonly hudCoinsEl: HTMLElement;
  private readonly finalScoreEl: HTMLElement;
  private readonly finalHiScoreEl: HTMLElement;
  private readonly victoryScoreEl: HTMLElement;
  private readonly victoryHiScoreEl: HTMLElement;

  // Power-up HUD indicators
  private readonly shieldBadgeEl: HTMLElement;
  private readonly spreadBadgeEl: HTMLElement;
  private readonly rapidBadgeEl: HTMLElement;
  private readonly endlessWaveBadgeEl: HTMLElement;

  // Victory Stats elements
  private readonly victoryRankEl: HTMLElement;
  private readonly victoryKillsEl: HTMLElement;
  private readonly victoryAccuracyEl: HTMLElement;
  private readonly victoryTimeEl: HTMLElement;
  private readonly victoryScrapEl: HTMLElement;

  // Quick HUD icon controls
  private readonly quickMuteBtn: HTMLButtonElement;
  private readonly quickPauseBtn: HTMLButtonElement;

  // Stage & Tactical Banners
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
  private readonly settingThemeBtns: HTMLButtonElement[] = [];

  // Hangar Elements
  private readonly hangarScrapEl: HTMLElement;
  private readonly shipGridEl: HTMLElement;

  // Mode Select Elements
  private readonly modeToggleBtn: HTMLButtonElement;
  private readonly diffToggleBtn: HTMLButtonElement;
  private readonly stageListEl: HTMLElement;
  private readonly endlessStatsEl: HTMLElement;

  // Debug Modal & Buttons
  private readonly debugModal: HTMLElement;
  private debugGodModeBtn!: HTMLButtonElement;
  private readonly quickDebugBtn: HTMLButtonElement;
  private readonly titleDebugBtn: HTMLButtonElement;
  private readonly pauseDebugBtn: HTMLButtonElement;

  private stageTitleTimer = 0;
  private bannerTimer = 0;
  private warningTimer = 0;

  private lastState: GameState | null = null;
  private lastScore = -1;
  private lastLives = -1;
  private lastHiScore = -1;
  private lastCoins = -1;

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
      <div class="scrap-display title-scrap-display">SCRAP BANK: 🪙 <span class="title-scrap-val">0000</span></div>
      <div class="title-mode-indicator">MODE: CAMPAIGN - STAGE 1 [NORMAL]</div>
      <div class="menu-list">
        <button class="menu-btn start-mission-btn">START MISSION</button>
        <button class="menu-btn mode-select-btn">STAGE & MODE SELECT</button>
        <button class="menu-btn hangar-btn">SHIP HANGAR</button>
        <button class="menu-btn how-to-play-btn">HOW TO PLAY</button>
        <button class="menu-btn title-settings-btn">SETTINGS</button>
        <button class="menu-btn title-debug-btn">🛠 DEBUG CONSOLE [F1 / ~]</button>
      </div>
      <div class="prompt blink">PRESS ENTER OR SPACE TO START</div>
      <div class="hi-score-display title-hi-score">HI-SCORE: 000000</div>
      <div class="controls-guide">
        <span>MOVE: WASD / ARROWS | FIRE: SPACE / Z</span>
        <span>PAUSE: ESC / P | SOUND: M</span>
      </div>
    `;

    // 2. Playing HUD
    this.playingScreen = document.createElement("div");
    this.playingScreen.className = "screen playing-hud";
    this.playingScreen.innerHTML = `
      <div class="hud-bar">
        <div class="hud-lives">LIVES: <span class="lives-val">♥♥♥</span></div>
        <div class="hud-coins">🪙 <span class="hud-coins-val">000</span></div>
        <div class="hud-hiscore">HI: <span class="hiscore-val">000000</span></div>
        <div class="hud-score">SCORE: <span class="score-val">000000</span></div>
        <div class="hud-quick-controls">
          <button class="hud-icon-btn debug-icon-btn" title="Debug Console (F1 / ~)">🛠</button>
          <button class="hud-icon-btn mute-icon-btn" title="Toggle Sound (M)">🔊</button>
          <button class="hud-icon-btn pause-icon-btn" title="Pause Game (ESC / P)">⏸</button>
        </div>
      </div>
      <div class="hud-powerup-bar">
        <span class="powerup-badge shield-badge" style="display: none;">[SHIELD]</span>
        <span class="powerup-badge spread-badge" style="display: none;">[SPREAD 10s]</span>
        <span class="powerup-badge rapid-badge" style="display: none;">[RAPID 8s]</span>
        <span class="endless-wave-badge" style="display: none;">WAVE 01</span>
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
        <button class="menu-btn pause-debug-btn">🛠 DEBUG CONSOLE [F1 / ~]</button>
        <button class="menu-btn pause-sound-btn">SOUND: ON</button>
        <button class="menu-btn pause-volume-btn">VOL: 50%</button>
        <button class="menu-btn pause-shake-btn">SHAKE: FULL</button>
        <button class="menu-btn pause-theme-btn">THEME: VERDANT</button>
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
      <div class="victory-title">STAGE CLEAR</div>
      <div class="victory-sub">ORBITAL SECTOR SECURED</div>
      <div class="victory-stats">
        <div class="stat-row"><span>COMBAT EVALUATION:</span><span class="rank-val victory-rank-val">RANK S</span></div>
        <div class="stat-row"><span>ENEMIES NEUTRALIZED:</span><span class="victory-kills-val">0 / 0</span></div>
        <div class="stat-row"><span>FIRING ACCURACY:</span><span class="victory-accuracy-val">0%</span></div>
        <div class="stat-row"><span>MISSION TIME:</span><span class="victory-time-val">00:00</span></div>
        <div class="stat-row"><span>SCRAP RECOVERED:</span><span class="bonus-val victory-scrap-val">+0 🪙</span></div>
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
          <div class="guide-item"><span>PRIMARY WEAPONS:</span><span>SPACE / Z</span></div>
          <div class="guide-item"><span>TACTICAL PAUSE:</span><span>ESC / P</span></div>
          <div class="guide-item"><span>AUDIO TOGGLE:</span><span>M</span></div>
          <div class="guide-item"><span>POWER-UP [S]:</span><span>3-WAY TRIPLE SPREAD SHOT</span></div>
          <div class="guide-item"><span>POWER-UP [R]:</span><span>RAPID FIRE BOOST</span></div>
          <div class="guide-item"><span>POWER-UP [B]:</span><span>KINETIC ENERGY SHIELD</span></div>
          <div class="guide-item"><span>POWER-UP [E]:</span><span>EMP SMART BOMB SCREEN-WIPE</span></div>
          <div class="guide-briefing">
            DEFEAT HOSTILE SQUADRONS TO RECOVER SCRAP COINS AND POWER-UP CAPSULES. UNLOCK ADVANCED SHIPS IN THE HANGAR!
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
            <span>LCD THEME:</span>
            <button class="menu-btn modal-theme-btn">THEME: VERDANT</button>
          </div>
          <div class="guide-item">
            <span>LCD BEZEL HOUSING:</span>
            <button class="menu-btn modal-bezel-btn">BEZEL: OFF</button>
          </div>
        </div>
        <button class="menu-btn modal-close-btn settings-close-btn">CLOSE [ESC]</button>
      </div>
    `;

    // 8. Hangar Modal
    this.hangarModal = document.createElement("div");
    this.hangarModal.className = "modal hangar-modal";
    this.hangarModal.style.display = "none";
    this.hangarModal.innerHTML = `
      <div class="modal-box wide">
        <div class="modal-header">HANGAR DECK // STARFIGHTER FLEET</div>
        <div class="scrap-display hangar-scrap-display">AVAILABLE SCRAP: 🪙 <span class="hangar-coins-val">0000</span></div>
        <div class="ship-grid"></div>
        <button class="menu-btn modal-close-btn hangar-close-btn">CLOSE [ESC]</button>
      </div>
    `;

    // 9. Mode & Stage Select Modal
    this.modeSelectModal = document.createElement("div");
    this.modeSelectModal.className = "modal mode-select-modal";
    this.modeSelectModal.style.display = "none";
    this.modeSelectModal.innerHTML = `
      <div class="modal-box wide">
        <div class="modal-header">MISSION DEPLOYMENT PROTOCOL</div>
        <div class="modal-body">
          <div class="guide-item">
            <span>OPERATIONAL MODE:</span>
            <button class="menu-btn mode-toggle-btn">MODE: CAMPAIGN</button>
          </div>
          <div class="guide-item">
            <span>COMBAT DIFFICULTY:</span>
            <button class="menu-btn diff-toggle-btn">DIFFICULTY: NORMAL</button>
          </div>
          <div class="campaign-section">
            <div style="font-size: 10px; margin: 4px 0;">SELECT MISSION SECTOR:</div>
            <div class="stage-list"></div>
          </div>
          <div class="endless-section" style="display: none;">
            <div class="scrap-display endless-stats-display">
              HIGHEST WAVE: <span class="endless-wave-val">WAVE 01</span> | RECORD: <span class="endless-record-val">000000</span>
            </div>
          </div>
        </div>
        <button class="menu-btn modal-close-btn mode-select-close-btn">CONFIRM [ESC]</button>
      </div>
    `;

    // 10. Debug Console Modal
    this.debugModal = document.createElement("div");
    this.debugModal.className = "modal debug-modal";
    this.debugModal.style.display = "none";
    this.debugModal.innerHTML = `
      <div class="modal-box debug-box">
        <div class="modal-header debug-header">
          <span>🛠 DEVELOPER & QA DEBUG CONSOLE</span>
          <button class="menu-btn debug-close-btn" style="padding: 2px 8px; font-size: 8px;">✖ CLOSE [ESC / ~]</button>
        </div>
        <div class="debug-scroll-area">
          <!-- Section 1: Player Cheats & Weapons -->
          <div class="debug-section">
            <div class="debug-section-title">⚡ PLAYER CHEATS & WEAPONS</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-godmode-btn">🛡 GOD MODE: OFF</button>
              <button class="debug-btn dbg-spread-btn">🔫 GIVE SPREAD (15s)</button>
              <button class="debug-btn dbg-rapid-btn">⚡ GIVE RAPID (15s)</button>
              <button class="debug-btn dbg-shield-btn">🔮 GIVE SHIELD</button>
              <button class="debug-btn dbg-emp-btn">💥 DETONATE EMP BOMB</button>
              <button class="debug-btn dbg-add-life-btn">♥ LIVES +1 (MAX 5)</button>
              <button class="debug-btn dbg-add-coins-btn">🪙 +500 SCRAP</button>
              <button class="debug-btn dbg-unlock-all-btn">🚀 UNLOCK ALL CONTENT</button>
            </div>
            <div class="debug-sub-row">
              <span>HULL:</span>
              <button class="debug-chip-btn dbg-ship-alpha">ALPHA</button>
              <button class="debug-chip-btn dbg-ship-valkyrie">VALKYRIE</button>
              <button class="debug-chip-btn dbg-ship-phantom">PHANTOM</button>
              <button class="debug-chip-btn dbg-ship-solaris">SOLARIS</button>
            </div>
          </div>

          <!-- Section 2: Ambush Waves -->
          <div class="debug-section">
            <div class="debug-section-title">⚔ TEST POWER-UP AMBUSH WAVES</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-ambush-spread">⚔ SPREAD AMBUSH (5 CHEVRON)</button>
              <button class="debug-btn dbg-ambush-rapid">⚔ RAPID AMBUSH (CHASERS)</button>
              <button class="debug-btn dbg-ambush-shield">⚔ SHIELD AMBUSH (SWOOPERS)</button>
              <button class="debug-btn dbg-ambush-bomb">⚔ EMP COUNTER-STRIKE</button>
            </div>
          </div>

          <!-- Section 3: Spawn Hostiles & Boss -->
          <div class="debug-section">
            <div class="debug-section-title">👾 HOSTILE ENEMY & BOSS SPAWNER</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-spawn-scout">👾 SPAWN SCOUT</button>
              <button class="debug-btn dbg-spawn-weaver">👾 SPAWN WEAVER</button>
              <button class="debug-btn dbg-spawn-swooper">👾 SPAWN SWOOPER</button>
              <button class="debug-btn dbg-spawn-chaser">👾 SPAWN CHASER</button>
              <button class="debug-btn dbg-spawn-boss">☠ SPAWN TITAN WARDEN</button>
              <button class="debug-btn dbg-enrage-boss">🔥 ENRAGE BOSS (HP 10)</button>
              <button class="debug-btn dbg-clear-enemies">💥 CLEAR ALL HOSTILES</button>
            </div>
          </div>

          <!-- Section 4: Spawn Collectibles -->
          <div class="debug-section">
            <div class="debug-section-title">📦 SPAWN COLLECTIBLE DROPS</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-spawn-coin">🪙 DROP COIN</button>
              <button class="debug-btn dbg-drop-spread">📦 DROP [S] SPREAD</button>
              <button class="debug-btn dbg-drop-rapid">📦 DROP [R] RAPID</button>
              <button class="debug-btn dbg-drop-shield">📦 DROP [B] SHIELD</button>
              <button class="debug-btn dbg-drop-bomb">📦 DROP [E] EMP BOMB</button>
            </div>
          </div>

          <!-- Section 5: Stages & Environments -->
          <div class="debug-section">
            <div class="debug-section-title">🪐 STAGE & DEBRIS ENVIRONMENT</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-stage-1">🪐 STAGE 1 // SATELLITES</button>
              <button class="debug-btn dbg-stage-2">🪐 STAGE 2 // GIRDERS & RING</button>
              <button class="debug-btn dbg-stage-3">🪐 STAGE 3 // CRYSTALS & VOID</button>
              <button class="debug-btn dbg-endless-w2">♾ ENDLESS WAVE 2</button>
              <button class="debug-btn dbg-endless-w5">♾ ENDLESS WAVE 5 (ELITE)</button>
              <button class="debug-btn dbg-endless-w10">♾ ENDLESS WAVE 10</button>
            </div>
          </div>

          <!-- Section 6: Themes & Speeds -->
          <div class="debug-section">
            <div class="debug-section-title">🎨 THEMES, DISPLAY & SIMULATION SPEED</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-theme-verdant">🌿 VERDANT (DEFAULT)</button>
              <button class="debug-btn dbg-theme-amber">🔥 AMBER FOUNDRY</button>
              <button class="debug-btn dbg-theme-ice">❄ CYBER ICE</button>
              <button class="debug-btn dbg-theme-obsidian">🌑 OBSIDIAN VOID</button>
              <button class="debug-btn dbg-toggle-bezel">📺 TOGGLE BEZEL</button>
              <button class="debug-btn dbg-speed-half">⏱ 0.5x SLOW-MO</button>
              <button class="debug-btn dbg-speed-normal">⏱ 1.0x NORMAL</button>
              <button class="debug-btn dbg-speed-double">⏱ 2.0x FAST</button>
            </div>
          </div>

          <!-- Section 7: Audio Soundboard -->
          <div class="debug-section">
            <div class="debug-section-title">🔊 AUDIO SYNTHESIZER SOUNDBOARD</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-sfx-shoot">🔊 SHOOT</button>
              <button class="debug-btn dbg-sfx-eshoot">🔊 ENEMY SHOOT</button>
              <button class="debug-btn dbg-sfx-expl">🔊 EXPLOSION</button>
              <button class="debug-btn dbg-sfx-hexpl">🔊 HEAVY EXPL</button>
              <button class="debug-btn dbg-sfx-coin">🔊 COIN</button>
              <button class="debug-btn dbg-sfx-powerup">🔊 POWERUP</button>
              <button class="debug-btn dbg-sfx-shield">🔊 SHIELD BREAK</button>
              <button class="debug-btn dbg-sfx-emp">🔊 EMP BOMB</button>
              <button class="debug-btn dbg-sfx-ambush">🔊 AMBUSH ALERT</button>
              <button class="debug-btn dbg-sfx-siren">🔊 BOSS SIREN</button>
              <button class="debug-btn dbg-sfx-clear">🔊 CLEAR FANFARE</button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.container.appendChild(this.titleScreen);
    this.container.appendChild(this.playingScreen);
    this.container.appendChild(this.pauseScreen);
    this.container.appendChild(this.gameOverScreen);
    this.container.appendChild(this.victoryScreen);
    this.container.appendChild(this.howToPlayModal);
    this.container.appendChild(this.settingsModal);
    this.container.appendChild(this.hangarModal);
    this.container.appendChild(this.modeSelectModal);
    this.container.appendChild(this.debugModal);
    parent.appendChild(this.container);

    // Queries
    this.titleHiScoreEl = this.titleScreen.querySelector(".title-hi-score")!;
    this.titleScrapEl = this.titleScreen.querySelector(".title-scrap-val")!;
    this.titleModeEl = this.titleScreen.querySelector(".title-mode-indicator")!;

    this.livesEl = this.playingScreen.querySelector(".lives-val")!;
    this.scoreEl = this.playingScreen.querySelector(".score-val")!;
    this.hiScoreEl = this.playingScreen.querySelector(".hiscore-val")!;
    this.hudCoinsEl = this.playingScreen.querySelector(".hud-coins-val")!;

    this.shieldBadgeEl = this.playingScreen.querySelector(".shield-badge")!;
    this.spreadBadgeEl = this.playingScreen.querySelector(".spread-badge")!;
    this.rapidBadgeEl = this.playingScreen.querySelector(".rapid-badge")!;
    this.endlessWaveBadgeEl = this.playingScreen.querySelector(".endless-wave-badge")!;

    this.finalScoreEl = this.gameOverScreen.querySelector(".final-score-val")!;
    this.finalHiScoreEl = this.gameOverScreen.querySelector(".final-hiscore-val")!;
    this.victoryScoreEl = this.victoryScreen.querySelector(".victory-score-val")!;
    this.victoryHiScoreEl = this.victoryScreen.querySelector(".victory-hiscore-val")!;

    this.victoryRankEl = this.victoryScreen.querySelector(".victory-rank-val")!;
    this.victoryKillsEl = this.victoryScreen.querySelector(".victory-kills-val")!;
    this.victoryAccuracyEl = this.victoryScreen.querySelector(".victory-accuracy-val")!;
    this.victoryTimeEl = this.victoryScreen.querySelector(".victory-time-val")!;
    this.victoryScrapEl = this.victoryScreen.querySelector(".victory-scrap-val")!;

    this.quickMuteBtn = this.playingScreen.querySelector(".mute-icon-btn")!;
    this.quickPauseBtn = this.playingScreen.querySelector(".pause-icon-btn")!;
    this.quickDebugBtn = this.playingScreen.querySelector(".debug-icon-btn")!;
    this.titleDebugBtn = this.titleScreen.querySelector(".title-debug-btn")!;
    this.pauseDebugBtn = this.pauseScreen.querySelector(".pause-debug-btn")!;

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

    this.hangarScrapEl = this.hangarModal.querySelector(".hangar-coins-val")!;
    this.shipGridEl = this.hangarModal.querySelector(".ship-grid")!;

    this.modeToggleBtn = this.modeSelectModal.querySelector(".mode-toggle-btn")!;
    this.diffToggleBtn = this.modeSelectModal.querySelector(".diff-toggle-btn")!;
    this.stageListEl = this.modeSelectModal.querySelector(".stage-list")!;
    this.endlessStatsEl = this.modeSelectModal.querySelector(".endless-stats-display")!;

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

    const pauseThemeBtn = this.pauseScreen.querySelector(".pause-theme-btn") as HTMLButtonElement;
    const modalThemeBtn = this.settingsModal.querySelector(".modal-theme-btn") as HTMLButtonElement;
    if (pauseThemeBtn) this.settingThemeBtns.push(pauseThemeBtn);
    if (modalThemeBtn) this.settingThemeBtns.push(modalThemeBtn);

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

    const modeSelectBtn = this.titleScreen.querySelector(".mode-select-btn");
    modeSelectBtn?.addEventListener("click", () => {
      this.game?.getAudio().playMenuSelect();
      this.modeSelectModal.style.display = "flex";
      this.renderModeSelectUI();
    });

    const hangarBtn = this.titleScreen.querySelector(".hangar-btn");
    hangarBtn?.addEventListener("click", () => {
      this.game?.getAudio().playMenuSelect();
      this.hangarModal.style.display = "flex";
      this.renderHangarUI();
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

    this.titleDebugBtn?.addEventListener("click", () => this.toggleDebugModal());
    this.pauseDebugBtn?.addEventListener("click", () => this.toggleDebugModal());
    this.quickDebugBtn?.addEventListener("click", () => this.toggleDebugModal());
    this.setupDebugModalEvents();

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

    const hangarClose = this.hangarModal.querySelector(".hangar-close-btn");
    hangarClose?.addEventListener("click", () => {
      this.game?.getAudio().playMenuSelect();
      this.hangarModal.style.display = "none";
    });

    const modeSelectClose = this.modeSelectModal.querySelector(".mode-select-close-btn");
    modeSelectClose?.addEventListener("click", () => {
      this.game?.getAudio().playMenuSelect();
      this.modeSelectModal.style.display = "none";
    });

    // Mode Toggle Button
    this.modeToggleBtn.addEventListener("click", () => {
      if (!this.game) return;
      this.game.getAudio().playMenuMove();
      const current = this.game.getSettings().getSettings().gameMode;
      const next = current === "CAMPAIGN" ? "ENDLESS" : "CAMPAIGN";
      this.game.getSettings().setGameMode(next);
      this.renderModeSelectUI();
    });

    // Difficulty Toggle Button
    this.diffToggleBtn.addEventListener("click", () => {
      if (!this.game) return;
      this.game.getAudio().playMenuMove();
      this.game.getSettings().toggleDifficulty();
      this.renderModeSelectUI();
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

    for (const btn of this.settingThemeBtns) {
      btn.addEventListener("click", () => {
        this.game?.getAudio().playMenuMove();
        this.game?.getSettings().cycleTheme();
      });
    }

    // Keyboard shortcuts
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
        if (this.hangarModal.style.display === "flex") {
          this.hangarModal.style.display = "none";
          this.game?.getAudio().playMenuSelect();
          return;
        }
        if (this.modeSelectModal.style.display === "flex") {
          this.modeSelectModal.style.display = "none";
          this.game?.getAudio().playMenuSelect();
          return;
        }
        if (this.debugModal.style.display === "flex") {
          this.debugModal.style.display = "none";
          this.game?.getAudio().playMenuSelect();
          return;
        }
      }

      if (e.code === "Backquote" || e.code === "F1" || e.key === "~" || e.key === "\\") {
        e.preventDefault();
        this.toggleDebugModal();
        return;
      }

      if (e.code === "KeyM") {
        if (!e.repeat) {
          this.game?.getAudio().playMenuMove();
          this.game?.getSettings().toggleMute();
        }
      }
    });
  }

  toggleDebugModal(): void {
    const isHidden = this.debugModal.style.display === "none";
    this.debugModal.style.display = isHidden ? "flex" : "none";
    if (isHidden) {
      this.game?.getAudio().playMenuSelect();
      this.updateDebugUIState();
    } else {
      this.game?.getAudio().playMenuMove();
    }
  }

  private updateDebugUIState(): void {
    if (!this.game) return;
    const isGod = this.game.isGodMode();
    if (this.debugGodModeBtn) {
      this.debugGodModeBtn.textContent = `🛡 GOD MODE: ${isGod ? "ON" : "OFF"}`;
      this.debugGodModeBtn.classList.toggle("active", isGod);
    }
  }

  private setupDebugModalEvents(): void {
    const closeBtn = this.debugModal.querySelector(".debug-close-btn");
    closeBtn?.addEventListener("click", () => this.toggleDebugModal());

    // 1. Cheats & Weapons
    this.debugGodModeBtn = this.debugModal.querySelector(".dbg-godmode-btn") as HTMLButtonElement;
    this.debugGodModeBtn?.addEventListener("click", () => {
      if (!this.game) return;
      const isGod = this.game.toggleGodMode();
      this.debugGodModeBtn.textContent = `🛡 GOD MODE: ${isGod ? "ON" : "OFF"}`;
      this.debugGodModeBtn.classList.toggle("active", isGod);
      this.showBanner(`DEBUG: GOD MODE ${isGod ? "ENABLED" : "DISABLED"}`, 2.0);
      this.game.getAudio().playMenuSelect();
    });

    const spreadBtn = this.debugModal.querySelector(".dbg-spread-btn");
    spreadBtn?.addEventListener("click", () => {
      this.game?.debugGivePowerup("spread");
      this.showBanner("DEBUG: SPREAD SHOT GIVEN (15s)", 2.0);
    });

    const rapidBtn = this.debugModal.querySelector(".dbg-rapid-btn");
    rapidBtn?.addEventListener("click", () => {
      this.game?.debugGivePowerup("rapid");
      this.showBanner("DEBUG: RAPID FIRE GIVEN (15s)", 2.0);
    });

    const shieldBtn = this.debugModal.querySelector(".dbg-shield-btn");
    shieldBtn?.addEventListener("click", () => {
      this.game?.debugGivePowerup("shield");
      this.showBanner("DEBUG: BARRIER SHIELD ONLINE", 2.0);
    });

    const empBtn = this.debugModal.querySelector(".dbg-emp-btn");
    empBtn?.addEventListener("click", () => {
      this.game?.debugDetonateBomb();
    });

    const addLifeBtn = this.debugModal.querySelector(".dbg-add-life-btn");
    addLifeBtn?.addEventListener("click", () => {
      if (!this.game) return;
      this.game.getPlayer().lives = Math.min(5, this.game.getPlayer().lives + 1);
      this.showBanner(`DEBUG: LIVES = ${this.game.getPlayer().lives}`, 2.0);
      this.game.getAudio().playCoin();
    });

    const addCoinsBtn = this.debugModal.querySelector(".dbg-add-coins-btn");
    addCoinsBtn?.addEventListener("click", () => {
      if (!this.game) return;
      this.game.getSettings().addCoins(500);
      this.showBanner("DEBUG: +500 SCRAP ADDED", 2.0);
      this.game.getAudio().playCoin();
    });

    const unlockAllBtn = this.debugModal.querySelector(".dbg-unlock-all-btn");
    unlockAllBtn?.addEventListener("click", () => {
      if (!this.game) return;
      this.game.getSettings().unlockAllContent();
      this.showBanner("DEBUG: ALL SHIPS & STAGES UNLOCKED", 2.5);
      this.game.getAudio().playStageClear();
    });

    // Hull switchers
    const ships: SkinId[] = ["alpha", "valkyrie", "phantom", "solaris"];
    for (const s of ships) {
      const btn = this.debugModal.querySelector(`.dbg-ship-${s}`);
      btn?.addEventListener("click", () => {
        if (!this.game) return;
        this.game.getSettings().selectSkin(s);
        this.game.getPlayer().applySkin(s);
        this.showBanner(`DEBUG: EQUIPPED ${s.toUpperCase()} STARFIGHTER`, 2.0);
        this.game.getAudio().playMenuSelect();
      });
    }

    // 2. Ambush Waves
    const ambushSpread = this.debugModal.querySelector(".dbg-ambush-spread");
    ambushSpread?.addEventListener("click", () => {
      this.game?.triggerPowerupAmbush("spread");
    });

    const ambushRapid = this.debugModal.querySelector(".dbg-ambush-rapid");
    ambushRapid?.addEventListener("click", () => {
      this.game?.triggerPowerupAmbush("rapid");
    });

    const ambushShield = this.debugModal.querySelector(".dbg-ambush-shield");
    ambushShield?.addEventListener("click", () => {
      this.game?.triggerPowerupAmbush("shield");
    });

    const ambushBomb = this.debugModal.querySelector(".dbg-ambush-bomb");
    ambushBomb?.addEventListener("click", () => {
      this.game?.triggerPowerupAmbush("bomb");
    });

    // 3. Spawn Hostiles & Boss
    const spawnScout = this.debugModal.querySelector(".dbg-spawn-scout");
    spawnScout?.addEventListener("click", () => this.game?.debugSpawnEnemy("scout"));

    const spawnWeaver = this.debugModal.querySelector(".dbg-spawn-weaver");
    spawnWeaver?.addEventListener("click", () => this.game?.debugSpawnEnemy("weaver"));

    const spawnSwooper = this.debugModal.querySelector(".dbg-spawn-swooper");
    spawnSwooper?.addEventListener("click", () => this.game?.debugSpawnEnemy("swooper"));

    const spawnChaser = this.debugModal.querySelector(".dbg-spawn-chaser");
    spawnChaser?.addEventListener("click", () => this.game?.debugSpawnEnemy("chaser"));

    const spawnBoss = this.debugModal.querySelector(".dbg-spawn-boss");
    spawnBoss?.addEventListener("click", () => this.game?.debugSpawnBoss());

    const enrageBoss = this.debugModal.querySelector(".dbg-enrage-boss");
    enrageBoss?.addEventListener("click", () => {
      this.game?.debugSetBossHp(10);
      this.showBanner("DEBUG: BOSS ENRAGED (HP 10)", 2.0);
    });

    const clearEnemies = this.debugModal.querySelector(".dbg-clear-enemies");
    clearEnemies?.addEventListener("click", () => {
      this.game?.debugClearAllEnemies();
      this.showBanner("DEBUG: ALL HOSTILES CLEARED", 2.0);
    });

    // 4. Collectibles Spawner
    const dropCoin = this.debugModal.querySelector(".dbg-spawn-coin");
    dropCoin?.addEventListener("click", () => this.game?.debugSpawnItem("coin"));

    const dropSpread = this.debugModal.querySelector(".dbg-drop-spread");
    dropSpread?.addEventListener("click", () => this.game?.debugSpawnItem("powerup_spread"));

    const dropRapid = this.debugModal.querySelector(".dbg-drop-rapid");
    dropRapid?.addEventListener("click", () => this.game?.debugSpawnItem("powerup_rapid"));

    const dropShield = this.debugModal.querySelector(".dbg-drop-shield");
    dropShield?.addEventListener("click", () => this.game?.debugSpawnItem("powerup_shield"));

    const dropBomb = this.debugModal.querySelector(".dbg-drop-bomb");
    dropBomb?.addEventListener("click", () => this.game?.debugSpawnItem("powerup_bomb"));

    // 5. Stages & Environments
    const stg1 = this.debugModal.querySelector(".dbg-stage-1");
    stg1?.addEventListener("click", () => {
      this.game?.debugSetStage(1);
      this.showBanner("DEBUG: STAGE 1 // VERDANT ORBIT (SATELLITES)", 2.2);
    });

    const stg2 = this.debugModal.querySelector(".dbg-stage-2");
    stg2?.addEventListener("click", () => {
      this.game?.debugSetStage(2);
      this.showBanner("DEBUG: STAGE 2 // IRON FOUNDRY (GIRDERS & RING)", 2.2);
    });

    const stg3 = this.debugModal.querySelector(".dbg-stage-3");
    stg3?.addEventListener("click", () => {
      this.game?.debugSetStage(3);
      this.showBanner("DEBUG: STAGE 3 // CYBER ABYSS (CRYSTALS & VOID)", 2.2);
    });

    const endlessW2 = this.debugModal.querySelector(".dbg-endless-w2");
    endlessW2?.addEventListener("click", () => this.game?.debugSetEndlessWave(2));

    const endlessW5 = this.debugModal.querySelector(".dbg-endless-w5");
    endlessW5?.addEventListener("click", () => this.game?.debugSetEndlessWave(5));

    const endlessW10 = this.debugModal.querySelector(".dbg-endless-w10");
    endlessW10?.addEventListener("click", () => this.game?.debugSetEndlessWave(10));

    // 6. Themes & Speeds
    const thVerdant = this.debugModal.querySelector(".dbg-theme-verdant");
    thVerdant?.addEventListener("click", () => this.game?.getSettings().setTheme("verdant"));

    const thAmber = this.debugModal.querySelector(".dbg-theme-amber");
    thAmber?.addEventListener("click", () => this.game?.getSettings().setTheme("amber"));

    const thIce = this.debugModal.querySelector(".dbg-theme-ice");
    thIce?.addEventListener("click", () => this.game?.getSettings().setTheme("ice"));

    const thObsidian = this.debugModal.querySelector(".dbg-theme-obsidian");
    thObsidian?.addEventListener("click", () => this.game?.getSettings().setTheme("obsidian"));

    const toggleBezel = this.debugModal.querySelector(".dbg-toggle-bezel");
    toggleBezel?.addEventListener("click", () => this.game?.getSettings().toggleBezel());

    const spdHalf = this.debugModal.querySelector(".dbg-speed-half");
    spdHalf?.addEventListener("click", () => {
      this.game?.setTimeScale(0.5);
      this.showBanner("DEBUG: 0.5x SLOW-MO SPEED", 2.0);
    });

    const spdNormal = this.debugModal.querySelector(".dbg-speed-normal");
    spdNormal?.addEventListener("click", () => {
      this.game?.setTimeScale(1.0);
      this.showBanner("DEBUG: 1.0x NORMAL SPEED", 2.0);
    });

    const spdDouble = this.debugModal.querySelector(".dbg-speed-double");
    spdDouble?.addEventListener("click", () => {
      this.game?.setTimeScale(2.0);
      this.showBanner("DEBUG: 2.0x FAST SPEED", 2.0);
    });

    // 7. Audio Soundboard
    const sfxList = [
      { sel: ".dbg-sfx-shoot", method: "playShoot" },
      { sel: ".dbg-sfx-eshoot", method: "playEnemyShoot" },
      { sel: ".dbg-sfx-expl", method: "playExplosion" },
      { sel: ".dbg-sfx-hexpl", method: "playHeavyExplosion" },
      { sel: ".dbg-sfx-coin", method: "playCoin" },
      { sel: ".dbg-sfx-powerup", method: "playPowerup" },
      { sel: ".dbg-sfx-shield", method: "playShieldBreak" },
      { sel: ".dbg-sfx-emp", method: "playEmpBomb" },
      { sel: ".dbg-sfx-ambush", method: "playAmbushAlert" },
      { sel: ".dbg-sfx-siren", method: "playWarningSiren" },
      { sel: ".dbg-sfx-clear", method: "playStageClear" },
    ];
    for (const item of sfxList) {
      const btn = this.debugModal.querySelector(item.sel);
      btn?.addEventListener("click", () => {
        this.game?.debugPlaySfx(item.method);
      });
    }
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

    const themeName = THEME_PALETTES[s.theme]?.name || "VERDANT";
    for (const btn of this.settingThemeBtns) {
      btn.textContent = `THEME: ${themeName}`;
    }

    // Update handheld bezel CSS class and theme class
    const gameContainer = this.container.closest(".game-container") || document.querySelector(".game-container");
    gameContainer?.classList.toggle("bezel-mode", s.bezelFrame);
    gameContainer?.classList.remove("theme-verdant", "theme-amber", "theme-ice", "theme-obsidian");
    gameContainer?.classList.add(`theme-${s.theme}`);

    // Update Title info
    this.titleScrapEl.textContent = this.formatNumber(s.coins, 4);
    if (s.gameMode === "ENDLESS") {
      this.titleModeEl.textContent = `MODE: ENDLESS SURVIVAL [${s.difficulty}]`;
    } else {
      this.titleModeEl.textContent = `MODE: CAMPAIGN - STAGE ${s.selectedStage} [${s.difficulty}]`;
    }
  }

  renderHangarUI(): void {
    if (!this.game) return;
    const s = this.game.getSettings().getSettings();
    this.hangarScrapEl.textContent = this.formatNumber(s.coins, 4);

    this.shipGridEl.innerHTML = "";
    for (const skin of SHIP_SKINS) {
      const card = document.createElement("div");
      const isUnlocked = s.unlockedSkins.includes(skin.id);
      const isSelected = s.selectedSkin === skin.id;

      card.className = `ship-card ${isSelected ? "selected" : ""}`;
      card.innerHTML = `
        <div class="ship-card-header">
          <span class="ship-name">${skin.name}</span>
          <span class="ship-perk">${skin.perk}</span>
        </div>
        <div class="ship-desc">${skin.description}</div>
        <button class="menu-btn ship-action-btn"></button>
      `;

      const actionBtn = card.querySelector(".ship-action-btn") as HTMLButtonElement;
      if (isSelected) {
        actionBtn.textContent = "[EQUIPPED]";
        actionBtn.disabled = true;
      } else if (isUnlocked) {
        actionBtn.textContent = "EQUIP";
        actionBtn.addEventListener("click", () => {
          this.game?.getAudio().playMenuSelect();
          this.game?.getSettings().selectSkin(skin.id);
          this.renderHangarUI();
        });
      } else {
        actionBtn.textContent = `UNLOCK (🪙 ${skin.cost})`;
        actionBtn.disabled = s.coins < skin.cost;
        actionBtn.addEventListener("click", () => {
          if (this.game?.getSettings().unlockSkin(skin.id, skin.cost)) {
            this.game.getAudio().playPowerup();
            this.renderHangarUI();
          }
        });
      }

      this.shipGridEl.appendChild(card);
    }
  }

  renderModeSelectUI(): void {
    if (!this.game) return;
    const s = this.game.getSettings().getSettings();

    this.modeToggleBtn.textContent = `MODE: ${s.gameMode}`;
    this.diffToggleBtn.textContent = `DIFFICULTY: ${s.difficulty} (${s.difficulty === "HARD" ? "1 LIFE, x1.5 REWARDS" : "3 LIVES, BALANCED"})`;

    const campaignSec = this.modeSelectModal.querySelector(".campaign-section") as HTMLElement;
    const endlessSec = this.modeSelectModal.querySelector(".endless-section") as HTMLElement;

    if (s.gameMode === "ENDLESS") {
      campaignSec.style.display = "none";
      endlessSec.style.display = "block";
      const waveEl = this.modeSelectModal.querySelector(".endless-wave-val") as HTMLElement;
      const recEl = this.modeSelectModal.querySelector(".endless-record-val") as HTMLElement;
      waveEl.textContent = `WAVE ${this.formatNumber(s.highestEndlessWave, 2)}`;
      recEl.textContent = this.formatScore(s.highScoreEndless);
    } else {
      campaignSec.style.display = "block";
      endlessSec.style.display = "none";

      this.stageListEl.innerHTML = "";
      for (const stg of CAMPAIGN_STAGES) {
        const isUnlocked = stg.stageNumber <= s.unlockedStages;
        const isSelected = stg.stageNumber === s.selectedStage;

        const card = document.createElement("div");
        card.className = `stage-card ${isSelected ? "selected" : ""} ${!isUnlocked ? "locked" : ""}`;
        card.innerHTML = `
          <div>
            <div>${stg.title}: ${stg.subtitle}</div>
            <div style="font-size: 8px; opacity: 0.8;">${stg.description}</div>
          </div>
          <button class="menu-btn stage-action-btn"></button>
        `;

        const btn = card.querySelector(".stage-action-btn") as HTMLButtonElement;
        if (!isUnlocked) {
          btn.textContent = "[LOCKED]";
          btn.disabled = true;
        } else if (isSelected) {
          btn.textContent = "[SELECTED]";
          btn.disabled = true;
        } else {
          btn.textContent = "SELECT";
          btn.addEventListener("click", () => {
            this.game?.getAudio().playMenuSelect();
            this.game?.getSettings().setSelectedStage(stg.stageNumber);
            this.game?.getSettings().setTheme(stg.theme);
            this.renderModeSelectUI();
          });
        }

        this.stageListEl.appendChild(card);
      }
    }
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
    const coins = game.getCoinsCollected();

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
        this.victoryScrapEl.textContent = `+${stats.coinsCollected ?? 0} 🪙`;
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
      if (coins !== this.lastCoins) {
        this.hudCoinsEl.textContent = this.formatNumber(coins, 3);
        this.lastCoins = coins;
      }

      // Synchronize Power-up Badges
      const player = game.getPlayer();
      this.shieldBadgeEl.style.display = player.hasShield ? "inline-block" : "none";
      if (player.spreadTimer > 0) {
        this.spreadBadgeEl.style.display = "inline-block";
        this.spreadBadgeEl.textContent = `[SPREAD ${Math.ceil(player.spreadTimer)}s]`;
      } else {
        this.spreadBadgeEl.style.display = "none";
      }

      if (player.rapidTimer > 0) {
        this.rapidBadgeEl.style.display = "inline-block";
        this.rapidBadgeEl.textContent = `[RAPID ${Math.ceil(player.rapidTimer)}s]`;
      } else {
        this.rapidBadgeEl.style.display = "none";
      }

      if (game.getSettings().getSettings().gameMode === "ENDLESS") {
        this.endlessWaveBadgeEl.style.display = "inline-block";
        this.endlessWaveBadgeEl.textContent = `WAVE ${this.formatNumber(game.getEndlessDirector().getWave(), 2)}`;
      } else {
        this.endlessWaveBadgeEl.style.display = "none";
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

  private formatNumber(val: number, digits: number): string {
    return val.toString().padStart(digits, "0");
  }

  private formatTime(sec: number): string {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
}
