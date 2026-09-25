# IMPLEMENTATION PLAN

## Phase 0 — Project bootstrap

Create:
- Vite app;
- TypeScript strict mode;
- Three.js;
- lint/formatting later after the loop is working;
- basic asset directories.

Definition of done:
- blank Three.js scene;
- resize works;
- `npm run dev` works;
- `npm run build` works.

## Phase 1 — 2D arcade core

Implement:
1. fixed timestep;
2. orthographic camera;
3. virtual gameplay viewport;
4. player rectangle boundary;
5. normalized input;
6. player sprite;
7. primary projectile;
8. one enemy;
9. circle/AABB collision;
10. score.

Definition of done:
- player can move;
- player can shoot;
- enemy can enter and die;
- player can be damaged.

## Phase 2 — Feel

Implement:
- projectile pooling;
- enemy pool;
- player hit invulnerability;
- hit-stop;
- screen shake;
- explosion animation;
- impact particle burst;
- basic sound effects.

Definition of done:
- shooting and killing feel satisfying without the LCD shader.

## Phase 3 — Pixel/LCD renderer

Implement:
- nearest-neighbor textures;
- virtual low-resolution render target;
- palette remap shader;
- subtle LCD ghosting;
- pixel-grid pass;
- vignette.

Definition of done:
- the same scene looks coherent at desktop and mobile sizes.

## Phase 4 — 2.5D environment

Implement:
- far stars;
- planet/large background prop;
- mid-distance props;
- foreground silhouettes;
- depth layers;
- shadows;
- one low-poly environmental object.

Definition of done:
- scene has visible depth but gameplay remains 2D.

## Phase 5 — Enemy framework

Implement behavior interfaces:
- straight;
- sine;
- dive;
- chase.

Implement attack interfaces:
- contact;
- straight projectile;
- burst.

Implement 4–6 enemy archetypes.

Definition of done:
- level author can create new enemy combinations through data.

## Phase 6 — Data-driven Level 1

Create `level01.json`.

Add:
- intro;
- 8–12 wave events;
- recovery section;
- elite;
- boss warning;
- boss.

Definition of done:
- full level can be played from start to finish without code changes.

## Phase 7 — First boss

Implement:
- intro animation;
- three attack states;
- phase transition;
- enrage;
- death sequence;
- victory state.

Definition of done:
- boss fight feels like an event, not a large normal enemy.

## Phase 8 — UI/audio polish

Implement:
- title screen;
- HUD;
- pause;
- game over;
- results;
- sound settings;
- pixel font;
- stage title card.

Definition of done:
- complete vertical slice has no debug UI.

## Phase 9 — Levels 2–8

For each level:
1. environment;
2. one new enemy behavior or combination;
3. wave schedule;
4. boss;
5. soundtrack variation;
6. playtest/balance pass.

Do not build all boss art before testing their mechanics.

## Phase 10 — Mobile controls

Implement:
- touch joystick;
- fire;
- special;
- pause;
- responsive safe area handling.

Test:
- one-handed play;
- landscape;
- touch latency;
- accidental taps.

## Phase 11 — Accessibility and polish

Add:
- reduced shake;
- volume control;
- input sensitivity;
- readable UI;
- robust pause/resume.

## Phase 12 — Release hardening

Check:
- no console errors;
- asset loading failures handled;
- tab switching;
- audio autoplay;
- low-end performance;
- mobile browser memory;
- save migration;
- attribution files.

## Definition of finished v1

```text
[ ] 8 playable levels
[ ] 8 original bosses
[ ] 10–12 enemy archetypes/variants
[ ] primary + special weapons
[ ] powerups
[ ] score/high score
[ ] title/menu/pause/game-over
[ ] LCD pixel presentation
[ ] 2.5D parallax environments
[ ] responsive desktop + mobile controls
[ ] sound + music
[ ] 60 FPS target
[ ] original asset set
```
