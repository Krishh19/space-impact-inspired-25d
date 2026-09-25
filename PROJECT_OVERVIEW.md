# Starfall 84 — Complete Project Overview & Technical Summary

> **Retro 2.5D Monochrome LCD Space Shooter**  
> *Inspired by the legendary Nokia 3310 mobile arcade experience, rebuilt as an original next-generation 2.5D game in Three.js and TypeScript.*

---

## 1. Executive Summary

**Starfall 84** is an arcade space combat shooter that blends nostalgic early-2000s handheld aesthetics with modern WebGL engineering. Running entirely in the browser at a locked 60 FPS, the game renders 2D arcade combat inside a shallow 3D space with multi-layered parallax backgrounds, procedural low-poly space debris, authentic LCD subpixel phosphor shaders, and procedural Web Audio synthesis.

The project has advanced from an initial proof-of-concept into a feature-complete arcade game featuring **Campaign and Endless modes**, **4 unlockable starfighters**, **4 tactical power-ups with dynamic enemy ambush waves**, **3 unique celestial stages with tailored 3D debris**, **multiple color themes**, and a **developer QA console**.

---

## 2. Technical Stack & Architecture

- **Engine & Rendering**: Three.js (r182) with Orthographic Camera projection ($160 \times 90$ world units).
- **Language & Runtime**: TypeScript 5.9 + Bun + Vite.
- **Custom Shaders**: GLSL custom post-processing pass rendering a virtual $320 \times 180$ LCD resolution with 4-shade monochrome quantization, subpixel grid lines, phosphor latency ghosting (ping-pong framebuffers), and subtle CRT curvature.
- **Memory Optimization**: Zero-allocation hot path during active gameplay using pre-allocated object pools (`ProjectilePool`, `EnemyPool`, `ItemPool`, `ParticlePool`).
- **Audio Architecture**: Procedural Web Audio API synthesizer generating 11 distinct SFX (lasers, explosions, sirens, fanfares, coin chimes, alerts) with zero external audio assets.
- **Persistence**: `SettingsManager` with reactive pub/sub observers and `localStorage` syncing for audio volume, accessibility screen shake, themes, high scores, scrap currency, and unlocked ships.

---

## 3. Game Modes & Progression

### 🚀 Campaign Mode
- **Stage 1 — Orbital Relay**: High-altitude low orbit with drifting communications satellites and solar panel arrays. Climax: Titan Warden boss encounter.
- **Stage 2 — Industrial Asteroid Foundry**: Deep space refinery sector featuring floating industrial I-beams, segmented conduit pipes, and a giant ringed gas planet.
- **Stage 3 — Singularity Rift**: Deep void rift with drifting alien crystalline obelisks, ancient gateway torus fragments, and an ominous pulsing gravitational singularity.

### ♾ Endless Survival Mode
- Progressive waves with adaptive dynamic difficulty scaling ($HP$, velocity, spawn rates).
- High score and highest wave tracking with persistent records.
- Elite Waves every 5 waves featuring high-threat squadrons.

### ⚔ Combat Difficulty
- **Normal**: Standard arcade balance (3 lives, fair drops).
- **Hardcore**: High-intensity mode with doubled enemy velocities, aggressive attack cadences, reduced power-up drop rates, and halved invulnerability windows.

---

## 4. Starfighter Fleet & Hangar Economy

Players recover **Scrap Coins** (`🪙`) from destroyed hostiles to unlock and deploy 4 distinct combat hulls in the interactive **Hangar**:

| Starfighter | Role | Characteristics | Cost |
|---|---|---|---|
| **Alpha Mk I** | Standard Vanguard | Balanced speed (75), standard twin lasers, balanced hitbox | Default |
| **Valkyrie** | High-Speed Interceptor | Extreme agility (92), rapid cooldown (0.13s), compact profile | 250 Scrap |
| **Phantom** | Stealth Recon | Nimble evasion (84), precision slim hitbox ($4 \times 2$), extended spread duration | 500 Scrap |
| **Solaris** | Heavy Armored Frigate | Heavy armor (4 base lives), wider spread, reinforced hull | 1,000 Scrap |

---

## 5. Tactical Power-Ups & Ambush Waves

Hostile squadrons have a chance to drop tactical energy capsules. Collecting any power-up immediately triggers a **counter-ambush wave**, demanding quick tactical mastery:

1. **Spread Cannon `[S]`**:
   - Upgrades primary weapon to a 3-way triple spread salvo ($\theta \in \{-15^\circ, 0^\circ, +15^\circ\}$) for 15 seconds.
   - **Ambush**: Spawns a **5-ship chevron interceptor wing** across top, mid, and bottom lanes—tailor-made for triple-shot devastation.
2. **Rapid Fire Boost `[R]`**:
   - Cuts primary weapon cooldown by $50\%$ for high sustained DPS for 12 seconds.
   - **Ambush**: Spawns a **heavy dreadnought patrol** with 2 high-HP Chasers escorted by Scouts.
3. **Kinetic Barrier Shield `[B]`**:
   - Deploys an invulnerable energy shield absorbing the next lethal hit.
   - **Ambush**: Spawns an **aggressive 3-swooper dive-bomber squad** that plunges directly toward the player's altitude.
4. **EMP Smart Bomb `[E]`**:
   - Screen-wiping energy shockwave destroying all basic hostiles and dealing massive boss damage.
   - **Ambush**: Triggers a **swift 4-ship counter-strike patrol** rushing into the cleared airspace.

---

## 6. Hostile Squadrons & Boss Encounter

### Hostile Enemy Archetypes
- **Scout Drone**: Fast linear reconnaissance craft with forward laser bursts.
- **Weaver Interceptor**: Sinusoidal wave-motion fighter testing elevation timing.
- **Swooper Dive-Bomber**: High-speed interceptor that cruises high before diving down toward the player.
- **Chaser Gunship**: Heavy armored gunship ($HP=4$) that tracks player elevation and fires burst salvos.

### Boss: Titan Warden Armored Dreadnought
- Procedural $32 \times 24$ sprite with heavy command bridge, twin railgun turrets, and exposed core.
- **Intro**: Sweeps into combat position with warning siren.
- **Phase 1 ($HP \ge 30$)**: Alternating twin railgun turrets and sinusoidal hover.
- **Phase 2 ($12 \le HP < 30$)**: 5-way sweeping projectile salvos and high-speed forward surge ram attacks.
- **Enraged Overload ($HP < 12$)**: Reactor core turns glowing amber; aggressive player tracking and continuous spread fire.
- **Defeat & Victory**: Cascading multi-point hull detonations, victory fanfare, and combat rank telemetry (`RANK S/A/B/C`).

---

## 7. Visuals, Debris & Themes

- **Stage-Specific 3D Debris**:
  - *Stage 1*: Solar panel arrays, communications satellite dishes, cylindrical probe bodies.
  - *Stage 2*: Steel I-beams, conduit pipes, cargo canisters, and a 3D ringed gas giant planet.
  - *Stage 3*: Crystalline octahedrons, ancient gateway torus ring fragments, void obelisks, and a pulsing gravitational black hole singularity.
- **4 LCD Display Themes**:
  - `Verdant (Default)`: Classic Nokia 3310 olive-green monochrome backlight.
  - `Amber Foundry`: High-contrast industrial amber glow.
  - `Cyber Ice`: Cold neon cyan/blue phosphor.
  - `Obsidian Void`: Sleek OLED high-contrast dark theme.
- **Handheld Bezel Mode**: Optional dark molded-plastic handheld casing with embossed logo and speaker grille perforations.

---

## 8. Developer & QA Debug Console

An interactive developer tool is built directly into the game:
- **Hotkeys**: `F1`, `` ` `` (Backquote), `~`, or `\`.
- **UI Button**: Quick `[🛠]` button in the top HUD toolbar, Title Screen, and Pause Screen.
- **Features**:
  - God Mode toggle (invulnerability).
  - 1-click power-up and weapon grants.
  - 1-click ambush wave triggers.
  - Hostile and Boss spawner + instant enrage trigger.
  - Stage warps (Stages 1–3) and Endless wave skips (Waves 2, 5, 10).
  - Simulation time scaling ($0.5\times$ Slow-mo, $1.0\times$ Normal, $2.0\times$ Fast).
  - Synthesizer soundboard to audition all SFX.
- **Console API**: Programmatic testing via `window.__debug` in the browser console.

---

## 9. Controls Quick Reference

| Action | Primary Key | Secondary Key |
|---|---|---|
| **Move Up / Down / Left / Right** | `W`, `A`, `S`, `D` | Arrow Keys |
| **Fire Primary Lasers** | `Space` | `Z` |
| **Tactical Pause** | `Escape` | `P` |
| **Toggle Audio Mute** | `M` | Top HUD `[🔊]` |
| **Open Debug Console** | `F1`, `` ` ``, `~`, `\` | Top HUD `[🛠]` |
