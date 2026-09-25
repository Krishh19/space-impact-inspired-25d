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

// Connect HUD as level event dispatcher (stage titles, tactical banners, warnings)
game.setLevelDispatcher(hud);

(window as unknown as { __game: Game }).__game = game;

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
