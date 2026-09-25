# GAME DESIGN DOCUMENT

## 1. Working title

Use a temporary original title during development. Recommended placeholder:

**STARFALL 84**

This is a working name, not a final trademark decision.

## 2. High concept

A fast horizontal arcade shooter where movement and combat are 2D, but the world is presented as a constrained 2.5D scene. The player pilots a tiny pixel-art craft through increasingly hostile environments, collecting special weapons, surviving enemy formations, and defeating multi-phase bosses.

The emotional target is:

> "It feels like an impossible-to-forget game from an old phone, but it looks like a carefully crafted modern indie arcade game."

## 3. Design pillars

### Pillar A — Instant readability
At a glance the player must understand:
- where the player is;
- what is dangerous;
- where bullets are going;
- what is collectible;
- what changed after a hit.

### Pillar B — Retro restraint
Do not add modern effects merely because the renderer can do them. Effects must reinforce the LCD/pixel language.

### Pillar C — Deliberate level design
Enemy waves are authored and memorable. Randomness is limited to small variations and optional endless mode.

### Pillar D — 2.5D, not full 3D
The gameplay plane remains 2D. Z is presentation depth.

## 4. Core loop

```text
Spawn
  -> Move
  -> Shoot
  -> Dodge
  -> Collect
  -> Kill
  -> Score
  -> Reach checkpoint
  -> Boss
  -> Clear
  -> Next level
```

## 5. Player

### Movement
- Free movement inside a rectangular gameplay boundary.
- WASD and arrow keys on desktop.
- Touch/virtual controls on mobile.
- Mild acceleration/deceleration.
- No inertial drifting that makes precision difficult.

### Base combat
- Primary weapon fires continuously while held.
- Limited projectile count through pooling, not gameplay restriction.
- Special weapon uses a small stock/ammo count.

### Damage
- Player starts with 3 lives.
- On hit:
  - temporary invulnerability;
  - visual blink;
  - short hit-stop;
  - small camera shake;
  - damage sound.
- Avoid a modern regenerating health bar for the player.

## 6. Weapons

### Primary — Pulse Shot
Fast, small projectile.

### Special — Seeker Missile
Slow start, weak homing, high single-target damage.

### Special — Arc Beam
Short-duration line/beam attack.

### Special — Burst Bomb
Large radial hit with limited stock.

Keep weapon silhouettes distinct at the pixel level.

## 7. Power-ups

Initial set:
- `LIFE`
- `SHIELD`
- `RAPID_FIRE`
- `SPECIAL_WEAPON`
- `SCORE`

Drop rates should be authored per wave rather than fully random.

## 8. Enemy archetypes

Implement behavior separately from visual identity.

| Archetype | Behavior | Primary threat |
|---|---|---|
| Scout | Straight | Basic pressure |
| Swooper | Dive | Forces vertical reaction |
| Weaver | Sine | Movement disruption |
| Chaser | Aim/steer toward player | Punishes staying still |
| Bomber | Approach then fire | Timing pressure |
| Turret | Stationary/anchored | Zone denial |
| Splitter | On death creates two small enemies | Crowd growth |
| Shield | Front-facing shield | Positioning |
| Swarm | Formation behavior | Screen control |
| Mine | Slow drift | Route blocking |
| Sniper | Brief aim telegraph | Reaction |
| Elite | Modified combinations | Difficulty spike |

## 9. Enemy behavior model

Each enemy has:
- movement behavior;
- attack behavior;
- hit points;
- score value;
- collision profile;
- optional spawn/death event;
- optional animation;
- optional telegraph.

Avoid hard-coding enemy-specific movement into the renderer.

## 10. Bosses

Each level has an original boss.

Bosses are state machines:

```text
INTRO
  -> PHASE_1
  -> PHASE_2
  -> ENRAGED
  -> DEATH
```

### Boss rules
- Always telegraph high-damage attacks.
- Use phases instead of one giant HP number.
- Change attack patterns, not only speed.
- Give each boss a readable silhouette.
- Use environmental staging to make bosses feel large.

### Eight original boss concepts

1. **Titan Warden** — armored hovering machine, sweeping projectile arcs.
2. **Burrower** — organic creature that enters from the ground/ceiling.
3. **Siege Engine** — rotating industrial weapon platform.
4. **Prism Maw** — crystalline alien that refracts beam attacks.
5. **Hive Mother** — spawns small swarm units.
6. **Gravewing** — giant orbital creature with dive attacks.
7. **Void Serpent** — segmented boss with changing body positions.
8. **Core** — final multi-phase entity combining previous mechanics.

These are original concepts; replace names/art as the project evolves.

## 11. Levels

Eight-stage campaign, but with completely original layouts and content.

### Level 01 — Green Planet
Purpose:
- teach movement;
- teach primary fire;
- introduce Scout, Swooper, Weaver.

Boss: Titan Warden.

### Level 02 — Canyon World
Purpose:
- vertical pressure;
- dive formations;
- first telegraphed attacks.

Boss: Burrower.

### Level 03 — Industrial Moon
Purpose:
- turrets;
- hazards;
- narrow lanes.

Boss: Siege Engine.

### Level 04 — Crystal Caverns
Purpose:
- constrained visibility;
- reflective/crystal environment;
- shield enemies.

Boss: Prism Maw.

### Level 05 — Alien Forest
Purpose:
- ambushes;
- swarm behavior;
- vertical environmental clutter.

Boss: Hive Mother.

### Level 06 — Orbital Ruins
Purpose:
- moving debris;
- large environmental props;
- mixed enemy waves.

Boss: Gravewing.

### Level 07 — Deep Space
Purpose:
- high-density combinations;
- faster projectile patterns;
- reduced safe space.

Boss: Void Serpent.

### Level 08 — Alien Core
Purpose:
- final exam;
- combined archetypes;
- elite formations.

Boss: Core.

## 12. Level pacing

Each level should have:
- intro;
- low-pressure tutorial/recovery segment;
- escalating wave section;
- mechanic introduction;
- combination section;
- short recovery;
- boss warning;
- boss;
- clear screen;
- score/result moment.

Avoid constant maximum intensity.

## 13. Wave design notation

Author waves as timeline data.

Example:

```json
{
  "time": 10.0,
  "formation": "V",
  "enemies": [
    { "type": "scout", "y": 12 },
    { "type": "scout", "y": 28 },
    { "type": "weaver", "y": 42 }
  ]
}
```

Supported formations:
- LINE
- V
- WAVE
- COLUMN
- SWARM
- AMBUSH
- TUNNEL

## 14. Score

Starter values:

```text
Scout        100
Swooper      150
Weaver       175
Chaser       200
Bomber       250
Turret       250
Splitter     300
Elite        500
Boss        5000
```

Add:
- wave clear bonus;
- no-hit section bonus;
- boss survival bonus.

Do not spam floating score numbers.

## 15. Visual direction

### Base palette
Use an LCD-inspired green monochrome range:
- dark ink;
- dark green;
- mid green;
- pale green.

### Accent colors
Use sparingly:
- warm amber for pickups;
- red for warnings;
- warm orange for explosions.

Most of the screen should remain monochrome.

## 16. Pixel language

- Internal virtual canvas should preserve a retro aspect ratio.
- Prefer chunky 1–4 pixel construction units.
- No anti-aliased gameplay sprites.
- No smooth vector UI.
- Use bitmap/pixel fonts.
- Keep animation cycles short.

## 17. 2.5D rules

Z-depth is visual only.

Recommended depth layers:

```text
+2  UI
 0  player
-1  normal enemies/projectiles
-3  near props
-6  mid background
-12 distant background
```

Do not use camera perspective to communicate gameplay position.

## 18. Parallax

Suggested multiplier:

```text
far stars        0.03
planet           0.06
far props        0.12
mid props        0.25
foreground       0.55
```

## 19. LCD post-processing

Target:
- subtle pixel grid;
- very mild horizontal ghosting;
- restrained vignette;
- monochrome remapping;
- tiny brightness variation.

Avoid:
- heavy CRT curvature;
- RGB chromatic aberration;
- thick scanlines;
- intense bloom;
- film-grain-heavy presentation.

## 20. Audio direction

Sound effects should be short and synthetic:
- square-wave shots;
- noise bursts for impacts;
- short descending tones for death;
- rising tones for pickups.

Music:
- loopable;
- short motifs;
- synthetic;
- stage-specific;
- boss variant.

## 21. UI

### HUD

```text
┌─────────────────────────────────────────┐
│ ♥♥♥       ⚡03                    004300 │
│                                         │
│               GAMEPLAY                  │
│                                         │
└─────────────────────────────────────────┘
```

### Menus

Use pixel typography and simple selection states:

```text
STARFALL 84

> START
  OPTIONS
  CONTROLS
  CREDITS
```

## 22. UX requirements

- Boot into title quickly.
- Gameplay begins within a few interactions.
- Pause is instant.
- Touch targets are large enough for mobile.
- No unnecessary onboarding.
- Settings are minimal.

## 23. Accessibility

Keep:
- reduced screen shake option;
- audio volume control;
- alternative touch control layout;
- readable UI at different display sizes.

Do not make color the only source of information.

## 24. Success criteria for the vertical slice

The first playable build is successful when:
- movement feels precise;
- firing feels satisfying;
- one enemy type can be understood immediately;
- the LCD treatment works at multiple resolutions;
- the boss feels different from a normal enemy;
- the whole slice can be replayed quickly;
- no large asset or framework dependency is required.
