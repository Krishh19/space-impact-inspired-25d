# 2.5D LCD Arcade Shooter

A Three.js + TypeScript browser game inspired by the *feel* of early monochrome mobile shooters, rebuilt as an original IP with new art, audio, enemies, bosses, names, and level content.

## Creative target

- 2D arcade gameplay rendered inside a shallow 3D scene.
- Orthographic camera.
- Pixel-art presentation with nearest-neighbor sampling.
- LCD-inspired monochrome palette with restrained accent colors.
- Parallax backgrounds, low-poly props, particles, shadows, and subtle post-processing.
- Fast boot, responsive controls, and 60 FPS target.

## Suggested stack

- TypeScript
- Three.js
- Vite
- Web Audio API
- Blender for optional low-poly GLB assets
- Aseprite or equivalent for pixel art
- localStorage for settings/high score

## Start

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Important IP rule

This repository is an original implementation. Do not copy proprietary game sprites, sounds, logos, text, level scripts, or other expressive assets from the inspiration game. Recreate the gameplay language and nostalgia with original content.

## Milestone

Do not start by building eight levels. First ship a polished vertical slice:

Title -> Level 1 -> three enemies -> one weapon pickup -> one boss -> game over.
