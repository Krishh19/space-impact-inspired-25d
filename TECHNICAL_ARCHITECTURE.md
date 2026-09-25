# TECHNICAL ARCHITECTURE

## 1. Core approach

This is a 2D simulation rendered through Three.js.

### Simulation space

All gameplay entities use:

```ts
type GameVec2 = {
  x: number;
  y: number;
};
```

Three.js Z is presentation depth only.

## 2. Coordinate system

Define a virtual gameplay viewport:

```ts
export const GAME_WIDTH = 160;
export const GAME_HEIGHT = 90;
```

Keep gameplay calculations in this coordinate space.

Mapping:

```ts
renderX = gameX;
renderY = gameY;
renderZ = depth;
```

Use a fixed virtual aspect ratio and letterbox on unusual screens.

## 3. Renderer

Recommended:
- `THREE.WebGLRenderer`
- antialias disabled
- pixel ratio capped
- orthographic camera

Example:

```ts
const renderer = new THREE.WebGLRenderer({
  antialias: false,
  alpha: false,
  powerPreference: "high-performance"
});

renderer.setPixelRatio(1);
```

## 4. Camera

Use `THREE.OrthographicCamera`.

Keep camera position stable.

Allowed camera effects:
- tiny shake;
- tiny boss-intro zoom;
- scripted level-transition movement.

Never allow free camera orbit.

## 5. Scene graph

```text
Scene
├── FarBackground
├── MidBackground
├── Environment
├── EnemyLayer
├── ProjectileLayer
├── PlayerLayer
├── FxLayer
└── UILayer
```

Each layer has explicit depth.

## 6. Rendering choices

### Sprites
Use `THREE.Sprite` for:
- player;
- enemies;
- bullets;
- powerups;
- small effects.

### 3D geometry
Use small low-poly meshes for:
- planets;
- asteroids;
- environmental structures;
- boss components where useful.

### Hybrid assets
Use a 3D body plus pixel-textured front-facing elements for major bosses.

## 7. Texture policy

Set gameplay textures to nearest-neighbor:

```ts
texture.magFilter = THREE.NearestFilter;
texture.minFilter = THREE.NearestFilter;
texture.generateMipmaps = false;
```

Keep UI and sprite atlases crisp.

## 8. Virtual-resolution strategy

Preferred:
1. Render the gameplay scene to a low-resolution render target.
2. Upscale with nearest-neighbor sampling.
3. Apply subtle LCD post-processing.

Alternative for an MVP:
- render directly at window resolution;
- keep all sprites pixel-art and use nearest filtering.

Use the low-resolution target only after the basic game is stable.

## 9. Game loop

Use a fixed simulation timestep.

```ts
const FIXED_DT = 1 / 60;

accumulator += frameDelta;

while (accumulator >= FIXED_DT) {
  update(FIXED_DT);
  accumulator -= FIXED_DT;
}

render();
```

Clamp excessively large frame deltas after tab switching.

## 10. Update order

```text
Input
  ↓
Game State
  ↓
Level/Spawn Director
  ↓
Player
  ↓
Enemies
  ↓
Projectiles
  ↓
Collisions
  ↓
Damage/Deaths
  ↓
Powerups/Score
  ↓
Particles
  ↓
Camera feedback
  ↓
Render
```

## 11. Game states

```ts
type GameState =
  | "BOOT"
  | "TITLE"
  | "MENU"
  | "LEVEL_INTRO"
  | "PLAYING"
  | "BOSS"
  | "LEVEL_CLEAR"
  | "PAUSED"
  | "GAME_OVER"
  | "RESULTS";
```

## 12. Entity model

Prefer composition over a giant inheritance tree.

Minimal base contract:

```ts
interface Entity {
  id: number;
  active: boolean;
  update(dt: number): void;
  destroy(): void;
}
```

Gameplay state should not live inside renderer classes.

## 13. Player

```ts
class Player {
  position = { x: 20, y: 45 };
  velocity = { x: 0, y: 0 };

  lives = 3;
  invulnerability = 0;
  specialAmmo = 0;

  update(dt: number): void {}
}
```

Input is injected rather than read directly by the player object.

## 14. Enemy architecture

Separate:
- definition;
- behavior;
- rendering;
- state.

Example:

```ts
interface EnemyDefinition {
  id: string;
  hp: number;
  speed: number;
  score: number;
  movement: MovementBehavior;
  attack?: AttackBehavior;
}
```

Movement behavior interface:

```ts
interface MovementBehavior {
  update(enemy: Enemy, dt: number, ctx: BehaviorContext): void;
}
```

## 15. Boss architecture

Boss is a state machine.

```ts
interface BossPhase {
  enter(): void;
  update(dt: number): void;
  exit(): void;
}
```

Recommended phases:
- intro;
- patrol/positioning;
- attack pattern;
- transition;
- enrage;
- defeat.

## 16. Projectile architecture

Use object pooling.

```ts
class ProjectilePool {
  acquire(): Projectile {}
  release(projectile: Projectile): void {}
}
```

Pool bullets, missiles, particles, hit effects.

Do not allocate new vectors or arrays every frame when avoidable.

## 17. Collision architecture

Use 2D shapes:
- circle;
- AABB;
- point/segment for beam attacks.

Do not use Three.js 3D collision for gameplay.

Collision groups:

```text
PLAYER
PLAYER_PROJECTILE
ENEMY
ENEMY_PROJECTILE
PICKUP
WORLD_HAZARD
BOSS
```

Resolve collision through a dedicated system.

## 18. Level architecture

Levels are JSON data.

Suggested shape:

```ts
interface LevelDefinition {
  id: string;
  duration: number;
  environment: string;
  waves: WaveEvent[];
  boss: string;
}
```

Wave:

```ts
interface WaveEvent {
  time: number;
  formation?: string;
  enemies: SpawnDefinition[];
}
```

## 19. Spawn director

The director owns all timed spawns.

Responsibilities:
- track level time;
- execute events;
- spawn formations;
- emit checkpoint events;
- trigger boss warning;
- trigger boss.

Do not place timers in every enemy class.

## 20. Rendering abstraction

Use small adapters:

```text
SpriteView
MeshView
ParticleView
BossView
HudView
```

Gameplay classes can request visual states:

```ts
player.setVisualState("HIT");
enemy.setVisualState("DAMAGED");
```

without knowing shader internals.

## 21. Animation

For pixel art, prefer frame animation using a sprite atlas.

```ts
interface SpriteAnimation {
  frames: number[];
  frameDuration: number;
  loop: boolean;
}
```

Avoid skeletal animation unless a specific 3D asset truly needs it.

## 22. Particle system

Start with a simple pooled particle manager.

Particle properties:
- position;
- velocity;
- lifetime;
- size;
- rotation;
- sprite frame;
- alpha.

Use instancing or batched points if counts grow.

## 23. Background system

Each parallax layer has:

```ts
interface ParallaxLayer {
  depth: number;
  speedMultiplier: number;
  wrapWidth: number;
}
```

Use repeated tiles or procedural geometry instead of giant textures.

## 24. Shader pipeline

Target pipeline:

```text
Game scene
  ↓
pixel/low-res pass
  ↓
LCD palette pass
  ↓
subtle ghosting
  ↓
tiny vignette
  ↓
output
```

Shader requirements:
- no expensive per-pixel loops;
- no high-resolution procedural noise unless necessary;
- uniforms for intensity so effects can be tuned at runtime.

## 25. Audio architecture

```ts
class AudioManager {
  preload(): Promise<void>;
  playSfx(id: string): void;
  playMusic(id: string): void;
  stopMusic(): void;
  setMasterVolume(value: number): void;
}
```

Use a single global audio context.

Handle browser autoplay restrictions by starting audio after the first user gesture.

## 26. Input architecture

Normalize all inputs to one interface:

```ts
interface InputState {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
  fire: boolean;
  special: boolean;
  pause: boolean;
}
```

Desktop, touch, and gamepad feed this same state.

## 27. UI architecture

Keep UI outside the gameplay simulation.

Recommended:
- DOM/CSS for menus;
- canvas/Three.js for HUD when pixel-perfect rendering is required.

Do not rebuild DOM nodes every frame.

## 28. Persistence

Use `localStorage` initially:

```ts
interface SaveData {
  highScore: number;
  highestLevel: number;
  settings: {
    masterVolume: number;
    shake: boolean;
    touchLayout: string;
  };
}
```

Move to IndexedDB only if save data grows substantially.

## 29. Debug layer

Bind a debug toggle such as F1.

Show:
- FPS;
- entity count;
- projectile count;
- particle count;
- level time;
- current state;
- player position;
- boss phase.

Optional:
- collision shapes;
- spawn timeline;
- AI state;
- object pool usage.

## 30. Performance rules

- No per-frame `new` for hot-path objects.
- Reuse vectors.
- Pool short-lived entities.
- Cap particle count.
- Keep pixel post-processing at a small internal resolution.
- Avoid unnecessary transparent full-screen layers.
- Keep the DOM UI static.
- Profile before optimizing exotic code.

## 31. TypeScript rules

- `strict: true`.
- Explicit types on public APIs.
- No `any` except at well-contained third-party boundaries.
- Use enums/string unions sparingly.
- Prefer pure functions for math and level parsing.
- Keep game constants centralized.

## 32. Module dependency direction

Preferred:

```text
core
 ↓
systems
 ↓
gameplay
 ↓
rendering adapters
 ↓
UI/audio
```

Avoid circular dependencies.

Example:
- `Enemy` should not import `Game`;
- `Renderer` should not own score logic;
- `AudioManager` should not decide game state.

## 33. Testing

High-value tests:
- collision math;
- enemy movement behaviors;
- spawn timing;
- level parsing;
- boss phase transitions;
- score calculations;
- save/load validation.

Do not spend early test effort on trivial visual methods.

## 34. Build targets

Primary:
- desktop Chromium;
- mobile Chromium/Safari where feasible.

Test:
- 1280x720;
- 1920x1080;
- narrow mobile portrait;
- narrow mobile landscape.

## 35. Security/IP hygiene

- Keep third-party licenses in `THIRD_PARTY_NOTICES.md`.
- Do not import unlicensed game assets.
- Keep original art source files separate from exported assets.
- Record asset provenance in `tools/ASSET_PROVENANCE.md`.
