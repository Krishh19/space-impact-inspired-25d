import * as THREE from "three";
import "./style.css";
import { Game } from "./core/Game";
import { GameRenderer } from "./rendering/GameRenderer";
import { InputManager } from "./systems/InputManager";
import { HudOverlay } from "./ui/HudOverlay";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Missing #app root element.");
}

// Container for letterboxed canvas and HUD overlay
const gameContainer = document.createElement("div");
gameContainer.className = "game-container";
app.appendChild(gameContainer);

const input = new InputManager();
const game = new Game(input);
const renderer = new GameRenderer(gameContainer);
const hud = new HudOverlay(gameContainer, game);

// Connect camera shake reaction
game.setOnShake((intensity, duration) => {
  renderer.triggerShake(intensity, duration);
});

// Connect theme changes to renderer
game.setOnThemeChange((theme) => {
  renderer.setTheme(theme);
});

// Connect HUD as level event dispatcher (stage titles, tactical banners, warnings)
game.setLevelDispatcher(hud);

(window as unknown as { __game: Game; __hud: HudOverlay; __debug: any }).__game = game;
(window as unknown as { __hud: HudOverlay }).__hud = hud;
(window as unknown as { __debug: any }).__debug = {
  godMode: () => game.toggleGodMode(),
  giveSpread: () => game.debugGivePowerup("spread"),
  giveRapid: () => game.debugGivePowerup("rapid"),
  giveShield: () => game.debugGivePowerup("shield"),
  detonateBomb: () => game.debugDetonateBomb(),
  triggerAmbush: (type: "spread" | "rapid" | "shield" | "bomb") => game.triggerPowerupAmbush(type),
  spawnEnemy: (type: any) => game.debugSpawnEnemy(type),
  spawnBoss: () => game.debugSpawnBoss(),
  setBossHp: (hp: number) => game.debugSetBossHp(hp),
  clearEnemies: () => game.debugClearAllEnemies(),
  spawnItem: (type: any) => game.debugSpawnItem(type),
  setStage: (stage: number) => game.debugSetStage(stage),
  setEndlessWave: (wave: number) => game.debugSetEndlessWave(wave),
  setTimeScale: (scale: number) => game.setTimeScale(scale),
  unlockAll: () => game.getSettings().unlockAllContent(),
  resetSave: () => game.getSettings().resetSavedData(),
  addCoins: (amount: number) => game.getSettings().addCoins(amount),
  selectSkin: (skinId: any) => {
    game.getSettings().selectSkin(skinId);
    game.getPlayer().applySkin(skinId);
  },
  setTheme: (themeId: any) => game.getSettings().setTheme(themeId),
  toggleBezel: () => game.getSettings().toggleBezel(),
  playSfx: (name: string) => game.debugPlaySfx(name),
  toggleDebugUI: () => hud.toggleDebugModal(),
};

const clock = new THREE.Clock();

function animate(): void {
  requestAnimationFrame(animate);

  const delta = Math.min(clock.getDelta(), 0.1);

  // 1. Simulation step (fixed timestep internally)
  game.updateFrame(delta);

  // 2. Render visual step
  renderer.render(game, delta);

  // 3. UI sync step
  hud.update(game, delta);
}

window.addEventListener("resize", () => {
  renderer.resize();
});

// Initial boot
renderer.resize();
animate();
