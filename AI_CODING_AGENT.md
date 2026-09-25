# AI CODING AGENT INSTRUCTIONS

You are implementing an original 2.5D arcade shooter in Three.js + TypeScript.

## Non-negotiable architecture

1. Gameplay is simulated in 2D.
2. Three.js Z is presentation depth only.
3. Use an orthographic camera.
4. Keep game state independent of rendering.
5. Use fixed-timestep simulation.
6. Pool projectiles, enemies, and particles.
7. Levels are data-driven JSON.
8. Enemy movement/attack behavior is modular.
9. Bosses are phase/state machines.
10. Do not introduce React or a game engine unless explicitly requested.

## Visual constraints

The target is a monochrome LCD/pixel aesthetic with subtle 2.5D depth.

Do:
- nearest-neighbor textures;
- pixel fonts;
- parallax;
- tiny particles;
- restrained lighting;
- subtle LCD shader;
- original art.

Do not:
- use heavy CRT effects;
- use photorealistic rendering;
- add smooth anti-aliased gameplay sprites;
- turn gameplay into a perspective 3D flight simulator.

## Code quality

- TypeScript strict mode.
- No unnecessary abstraction.
- Avoid per-frame allocations in hot paths.
- No circular imports.
- Add comments only where the reasoning is non-obvious.
- Prefer small focused modules.
- Keep constants centralized.

## When adding a feature

Follow this order:
1. define/adjust data model;
2. implement gameplay logic;
3. add tests for high-value deterministic logic;
4. connect renderer;
5. add effects/audio;
6. update documentation.

Do not implement visual effects before the underlying behavior works.

## Asset/IP rule

Never copy or redistribute proprietary assets from the inspiration game. Use original sprites, logos, sounds, names, level layouts, and text.

## Working style

Before editing:
- inspect the relevant files;
- understand existing abstractions;
- avoid duplicating systems.

After editing:
- run typecheck/build;
- run available tests;
- report exactly what changed and any remaining issues.

## Suggested tasks for the agent

### Task 1
Create the Three.js bootstrap, fixed timestep, orthographic camera, virtual viewport, and resize handling.

### Task 2
Create the input abstraction and player movement.

### Task 3
Create projectile pooling and primary fire.

### Task 4
Create enemy pooling, straight movement, and 2D collision.

### Task 5
Create explosion effects, hit-stop, camera shake, and SFX.

### Task 6
Add nearest-neighbor pixel rendering and LCD post-processing.

### Task 7
Add parallax background layers and one low-poly prop.

### Task 8
Create data-driven wave spawning and Level 01.

### Task 9
Create the first boss state machine and boss HUD.

Stop after each milestone, verify the build, then continue.
