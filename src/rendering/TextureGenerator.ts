import * as THREE from "three";
import type { SkinId } from "../core/Types";

export class TextureGenerator {
  private static makeTexture(
    width: number,
    height: number,
    draw: (ctx: CanvasRenderingContext2D) => void
  ): THREE.CanvasTexture {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Unable to create 2d canvas context");
    }

    ctx.imageSmoothingEnabled = false;
    draw(ctx);

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
    return texture;
  }

  static createPlayerTexture(skinId: SkinId = "alpha"): THREE.CanvasTexture {
    if (skinId === "valkyrie") {
      // 14x8 Valkyrie Interceptor: swept wings, twin forward railgun prongs
      return this.makeTexture(14, 8, (ctx) => {
        const ink = "#0f2a1d";
        const body = "#265c3f";
        const highlight = "#528f65";

        ctx.clearRect(0, 0, 14, 8);
        const matrix = [
          [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
          [1, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1, 3, 3, 0],
          [1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 0, 0],
          [1, 1, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 1, 1],
          [1, 1, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 1, 1],
          [1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 0, 0],
          [1, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1, 3, 3, 0],
          [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        ];

        for (let y = 0; y < 8; y++) {
          for (let x = 0; x < 14; x++) {
            const v = matrix[y][x];
            if (v === 1) {
              ctx.fillStyle = ink;
              ctx.fillRect(x, y, 1, 1);
            } else if (v === 2) {
              ctx.fillStyle = body;
              ctx.fillRect(x, y, 1, 1);
            } else if (v === 3) {
              ctx.fillStyle = highlight;
              ctx.fillRect(x, y, 1, 1);
            }
          }
        }
      });
    }

    if (skinId === "phantom") {
      // 12x10 Onyx Phantom: stealth delta-wing with angular carbon facets
      return this.makeTexture(12, 10, (ctx) => {
        const ink = "#0f2a1d";
        const body = "#1b3d2b";
        const highlight = "#487859";
        const eye = "#8ac4df";

        ctx.clearRect(0, 0, 12, 10);
        const matrix = [
          [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [1, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0],
          [1, 1, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0],
          [1, 1, 3, 3, 2, 2, 4, 4, 1, 1, 1, 1],
          [1, 1, 3, 3, 2, 2, 4, 4, 1, 1, 1, 1],
          [1, 1, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0],
          [1, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0],
          [1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];

        for (let y = 0; y < 10; y++) {
          for (let x = 0; x < 12; x++) {
            const v = matrix[y][x];
            if (v === 1) {
              ctx.fillStyle = ink;
              ctx.fillRect(x, y, 1, 1);
            } else if (v === 2) {
              ctx.fillStyle = body;
              ctx.fillRect(x, y, 1, 1);
            } else if (v === 3) {
              ctx.fillStyle = highlight;
              ctx.fillRect(x, y, 1, 1);
            } else if (v === 4) {
              ctx.fillStyle = eye;
              ctx.fillRect(x, y, 1, 1);
            }
          }
        }
      });
    }

    if (skinId === "solaris") {
      // 16x10 Solaris Cruiser: heavy gunship with forward twin plasma batteries & amber reactor
      return this.makeTexture(16, 10, (ctx) => {
        const ink = "#0f2a1d";
        const body = "#265c3f";
        const highlight = "#528f65";
        const reactor = "#d48b30";

        ctx.clearRect(0, 0, 16, 10);
        const matrix = [
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
          [1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
          [1, 2, 2, 3, 3, 2, 2, 2, 1, 2, 2, 2, 1, 1, 0, 0],
          [1, 1, 2, 2, 4, 4, 2, 2, 2, 2, 3, 3, 2, 1, 1, 0],
          [1, 1, 3, 2, 4, 4, 2, 2, 3, 3, 3, 3, 2, 2, 1, 1],
          [1, 1, 3, 2, 4, 4, 2, 2, 3, 3, 3, 3, 2, 2, 1, 1],
          [1, 1, 2, 2, 4, 4, 2, 2, 2, 2, 3, 3, 2, 1, 1, 0],
          [1, 2, 2, 3, 3, 2, 2, 2, 1, 2, 2, 2, 1, 1, 0, 0],
          [1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        ];

        for (let y = 0; y < 10; y++) {
          for (let x = 0; x < 16; x++) {
            const v = matrix[y][x];
            if (v === 1) {
              ctx.fillStyle = ink;
              ctx.fillRect(x, y, 1, 1);
            } else if (v === 2) {
              ctx.fillStyle = body;
              ctx.fillRect(x, y, 1, 1);
            } else if (v === 3) {
              ctx.fillStyle = highlight;
              ctx.fillRect(x, y, 1, 1);
            } else if (v === 4) {
              ctx.fillStyle = reactor;
              ctx.fillRect(x, y, 1, 1);
            }
          }
        }
      });
    }

    // Default: 12x8 Alpha Dart
    return this.makeTexture(12, 8, (ctx) => {
      const ink = "#0f2a1d";
      const highlight = "#265c3f";
      const core = "#528f65";

      ctx.clearRect(0, 0, 12, 8);

      const matrix = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 0, 0],
        [1, 1, 2, 3, 3, 2, 1, 1, 1, 1, 1, 1],
        [1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 0, 0],
        [1, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];

      for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 12; x++) {
          const val = matrix[y][x];
          if (val === 1) {
            ctx.fillStyle = ink;
            ctx.fillRect(x, y, 1, 1);
          } else if (val === 2) {
            ctx.fillStyle = highlight;
            ctx.fillRect(x, y, 1, 1);
          } else if (val === 3) {
            ctx.fillStyle = core;
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    });
  }

  static createCoinTexture(): THREE.CanvasTexture {
    // 6x6 pixel coin with rotating gold/amber highlight
    return this.makeTexture(6, 6, (ctx) => {
      ctx.clearRect(0, 0, 6, 6);
      const ink = "#0f2a1d";
      const gold = "#d4a340";
      const light = "#ffdd66";

      const matrix = [
        [0, 1, 1, 1, 1, 0],
        [1, 2, 3, 3, 2, 1],
        [1, 3, 1, 1, 3, 1],
        [1, 3, 1, 1, 3, 1],
        [1, 2, 3, 3, 2, 1],
        [0, 1, 1, 1, 1, 0],
      ];

      for (let y = 0; y < 6; y++) {
        for (let x = 0; x < 6; x++) {
          const v = matrix[y][x];
          if (v === 1) {
            ctx.fillStyle = ink;
            ctx.fillRect(x, y, 1, 1);
          } else if (v === 2) {
            ctx.fillStyle = gold;
            ctx.fillRect(x, y, 1, 1);
          } else if (v === 3) {
            ctx.fillStyle = light;
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    });
  }

  static createPowerupTexture(type: "spread" | "rapid" | "shield" | "bomb"): THREE.CanvasTexture {
    // 8x8 pixel capsule with high-contrast icon
    return this.makeTexture(8, 8, (ctx) => {
      ctx.clearRect(0, 0, 8, 8);
      const border = "#0f2a1d";
      const bg = "#265c3f";
      const icon = "#92b7a0";
      const accent = "#d48b30";

      // Background box
      ctx.fillStyle = border;
      ctx.fillRect(0, 0, 8, 8);
      ctx.fillStyle = bg;
      ctx.fillRect(1, 1, 6, 6);

      ctx.fillStyle = type === "bomb" ? accent : icon;

      if (type === "spread") {
        // 'S' glyph
        ctx.fillRect(2, 2, 4, 1);
        ctx.fillRect(2, 3, 1, 1);
        ctx.fillRect(2, 4, 4, 1);
        ctx.fillRect(5, 5, 1, 1);
        ctx.fillRect(2, 6, 4, 1);
      } else if (type === "rapid") {
        // 'R' glyph
        ctx.fillRect(2, 2, 4, 1);
        ctx.fillRect(2, 3, 1, 4);
        ctx.fillRect(5, 3, 1, 2);
        ctx.fillRect(2, 4, 4, 1);
        ctx.fillRect(4, 5, 1, 1);
        ctx.fillRect(5, 6, 1, 1);
      } else if (type === "shield") {
        // 'B' (Barrier) glyph
        ctx.fillRect(2, 2, 3, 1);
        ctx.fillRect(2, 2, 1, 5);
        ctx.fillRect(2, 4, 3, 1);
        ctx.fillRect(2, 6, 3, 1);
        ctx.fillRect(5, 3, 1, 1);
        ctx.fillRect(5, 5, 1, 1);
      } else if (type === "bomb") {
        // 'E' (EMP Bomb) glyph
        ctx.fillRect(2, 2, 4, 1);
        ctx.fillRect(2, 2, 1, 5);
        ctx.fillRect(2, 4, 3, 1);
        ctx.fillRect(2, 6, 4, 1);
      }
    });
  }

  static createShieldAuraTexture(): THREE.CanvasTexture {
    // 16x16 pixel octagonal shield ring
    return this.makeTexture(16, 16, (ctx) => {
      ctx.clearRect(0, 0, 16, 16);
      const ring = "#528f65";
      const highlight = "#92b7a0";

      const p = (x: number, y: number, col: string) => {
        ctx.fillStyle = col;
        ctx.fillRect(x, y, 1, 1);
      };

      // Outer octagonal loop
      for (let x = 5; x <= 10; x++) {
        p(x, 1, ring);
        p(x, 14, ring);
      }
      for (let y = 5; y <= 10; y++) {
        p(1, y, ring);
        p(14, y, ring);
      }

      // Corners
      p(2, 4, ring); p(3, 3, highlight); p(4, 2, ring);
      p(11, 2, ring); p(12, 3, highlight); p(13, 4, ring);
      p(2, 11, ring); p(3, 12, highlight); p(4, 13, ring);
      p(11, 13, ring); p(12, 12, highlight); p(13, 11, ring);
    });
  }

  static createScoutTexture(): THREE.CanvasTexture {
    return this.makeTexture(10, 8, (ctx) => {
      const ink = "#0f2a1d";
      const core = "#265c3f";
      const highlight = "#528f65";

      ctx.clearRect(0, 0, 10, 8);

      const matrix = [
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 2, 2, 1, 1, 0, 0],
        [0, 1, 1, 2, 3, 3, 2, 1, 1, 0],
        [1, 1, 2, 3, 1, 1, 3, 2, 1, 1],
        [1, 1, 2, 3, 1, 1, 3, 2, 1, 1],
        [0, 1, 1, 2, 3, 3, 2, 1, 1, 0],
        [0, 0, 1, 1, 2, 2, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      ];

      for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 10; x++) {
          const val = matrix[y][x];
          if (val === 1) {
            ctx.fillStyle = ink;
            ctx.fillRect(x, y, 1, 1);
          } else if (val === 2) {
            ctx.fillStyle = core;
            ctx.fillRect(x, y, 1, 1);
          } else if (val === 3) {
            ctx.fillStyle = highlight;
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    });
  }

  static createWeaverTexture(): THREE.CanvasTexture {
    return this.makeTexture(10, 8, (ctx) => {
      const ink = "#0f2a1d";
      const core = "#265c3f";
      const highlight = "#528f65";

      ctx.clearRect(0, 0, 10, 8);

      const matrix = [
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 2, 2, 1, 1, 2, 2, 1, 0],
        [1, 1, 2, 3, 2, 2, 3, 2, 1, 1],
        [1, 2, 2, 1, 3, 3, 1, 2, 2, 1],
        [1, 2, 2, 1, 3, 3, 1, 2, 2, 1],
        [1, 1, 2, 3, 2, 2, 3, 2, 1, 1],
        [0, 1, 2, 2, 1, 1, 2, 2, 1, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      ];

      for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 10; x++) {
          const val = matrix[y][x];
          if (val === 1) {
            ctx.fillStyle = ink;
            ctx.fillRect(x, y, 1, 1);
          } else if (val === 2) {
            ctx.fillStyle = core;
            ctx.fillRect(x, y, 1, 1);
          } else if (val === 3) {
            ctx.fillStyle = highlight;
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    });
  }

  static createSwooperTexture(): THREE.CanvasTexture {
    return this.makeTexture(10, 8, (ctx) => {
      const ink = "#0f2a1d";
      const core = "#265c3f";
      const highlight = "#528f65";

      ctx.clearRect(0, 0, 10, 8);

      const matrix = [
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 2, 1, 0],
        [0, 0, 1, 1, 1, 2, 2, 1, 1, 1],
        [1, 1, 2, 2, 3, 2, 1, 1, 0, 1],
        [1, 1, 2, 2, 3, 2, 1, 1, 0, 1],
        [0, 0, 1, 1, 1, 2, 2, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 2, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
      ];

      for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 10; x++) {
          const val = matrix[y][x];
          if (val === 1) {
            ctx.fillStyle = ink;
            ctx.fillRect(x, y, 1, 1);
          } else if (val === 2) {
            ctx.fillStyle = core;
            ctx.fillRect(x, y, 1, 1);
          } else if (val === 3) {
            ctx.fillStyle = highlight;
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    });
  }

  static createChaserTexture(): THREE.CanvasTexture {
    return this.makeTexture(12, 10, (ctx) => {
      const ink = "#0f2a1d";
      const core = "#265c3f";
      const highlight = "#528f65";

      ctx.clearRect(0, 0, 12, 10);

      const matrix = [
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 0],
        [1, 1, 2, 2, 2, 3, 3, 2, 2, 2, 1, 1],
        [1, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 1],
        [1, 1, 0, 1, 3, 1, 1, 3, 1, 0, 1, 1],
        [1, 1, 0, 1, 3, 1, 1, 3, 1, 0, 1, 1],
        [1, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 1],
        [1, 1, 2, 2, 2, 3, 3, 2, 2, 2, 1, 1],
        [0, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      ];

      for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 12; x++) {
          const val = matrix[y][x];
          if (val === 1) {
            ctx.fillStyle = ink;
            ctx.fillRect(x, y, 1, 1);
          } else if (val === 2) {
            ctx.fillStyle = core;
            ctx.fillRect(x, y, 1, 1);
          } else if (val === 3) {
            ctx.fillStyle = highlight;
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    });
  }

  static createProjectileTexture(): THREE.CanvasTexture {
    return this.makeTexture(4, 2, (ctx) => {
      ctx.clearRect(0, 0, 4, 2);
      ctx.fillStyle = "#265c3f";
      ctx.fillRect(0, 0, 4, 2);
      ctx.fillStyle = "#0f2a1d";
      ctx.fillRect(1, 0, 2, 2);
    });
  }

  static createEnemyProjectileTexture(): THREE.CanvasTexture {
    return this.makeTexture(4, 4, (ctx) => {
      ctx.clearRect(0, 0, 4, 4);
      ctx.fillStyle = "#0f2a1d";
      ctx.fillRect(1, 0, 2, 4);
      ctx.fillRect(0, 1, 4, 2);
      ctx.fillStyle = "#265c3f";
      ctx.fillRect(1, 1, 2, 2);
    });
  }

  static createParticleTexture(): THREE.CanvasTexture {
    return this.makeTexture(2, 2, (ctx) => {
      ctx.fillStyle = "#0f2a1d";
      ctx.fillRect(0, 0, 2, 2);
    });
  }

  static createTitanWardenTexture(enraged: boolean = false): THREE.CanvasTexture {
    return this.makeTexture(32, 24, (ctx) => {
      const ink = "#0f2a1d";
      const core = "#265c3f";
      const highlight = "#528f65";
      const reactor = enraged ? "#d48b30" : "#92b7a0";
      const reactorGlow = enraged ? "#f59e0b" : "#528f65";

      ctx.clearRect(0, 0, 32, 24);

      const pRect = (x: number, y: number, w: number, h: number, col: string) => {
        ctx.fillStyle = col;
        ctx.fillRect(x, y, w, h);
      };

      pRect(6, 8, 23, 8, ink);
      pRect(4, 9, 26, 6, ink);
      pRect(2, 10, 29, 4, ink);

      pRect(2, 5, 14, 3, ink);
      pRect(2, 16, 14, 3, ink);

      pRect(12, 2, 16, 6, ink);
      pRect(12, 16, 16, 6, ink);
      pRect(15, 1, 12, 2, ink);
      pRect(15, 21, 12, 2, ink);

      pRect(7, 9, 21, 6, core);
      pRect(3, 11, 27, 2, core);

      pRect(3, 6, 12, 1, core);
      pRect(3, 17, 12, 1, core);

      pRect(13, 3, 14, 4, core);
      pRect(13, 17, 14, 4, core);
      pRect(16, 2, 10, 1, core);
      pRect(16, 21, 10, 1, core);

      pRect(14, 4, 10, 1, highlight);
      pRect(14, 19, 10, 1, highlight);
      pRect(1, 5, 2, 3, highlight);
      pRect(1, 16, 2, 3, highlight);
      pRect(3, 11, 2, 2, highlight);
      pRect(8, 10, 1, 4, highlight);
      pRect(10, 11, 3, 2, ink);
      pRect(11, 11, 2, 1, highlight);

      pRect(28, 4, 3, 2, ink);
      pRect(28, 18, 3, 2, ink);
      pRect(29, 10, 3, 4, ink);
      pRect(30, 11, 2, 2, highlight);

      pRect(16, 8, 7, 8, ink);
      pRect(17, 9, 5, 6, reactorGlow);
      pRect(18, 10, 3, 4, reactor);
      pRect(19, 11, 1, 2, enraged ? "#ffffff" : "#0f2a1d");
    });
  }
}
