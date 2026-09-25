import * as THREE from "three";

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

  static createPlayerTexture(): THREE.CanvasTexture {
    // 12x8 pixel grid for original retro player ship facing right
    return this.makeTexture(12, 8, (ctx) => {
      const ink = "#0f2a1d";
      const highlight = "#265c3f";

      // Clear transparent
      ctx.clearRect(0, 0, 12, 8);

      // Pixel matrix (0=transparent, 1=ink, 2=highlight)
      const matrix = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0],
        [1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
        [1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0],
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
          }
        }
      }
    });
  }

  static createScoutTexture(): THREE.CanvasTexture {
    // 10x8 pixel grid for original retro scout drone facing left
    return this.makeTexture(10, 8, (ctx) => {
      const ink = "#0f2a1d";
      const core = "#265c3f";

      ctx.clearRect(0, 0, 10, 8);

      const matrix = [
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 2, 2, 1, 1, 0, 0],
        [0, 1, 1, 2, 2, 2, 2, 1, 1, 0],
        [1, 1, 2, 2, 1, 1, 2, 2, 1, 1],
        [1, 1, 2, 2, 1, 1, 2, 2, 1, 1],
        [0, 1, 1, 2, 2, 2, 2, 1, 1, 0],
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
          }
        }
      }
    });
  }

  static createWeaverTexture(): THREE.CanvasTexture {
    // 10x8 pixel grid for biomachine Weaver drone
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
    // 10x8 pixel grid for swept-wing Swooper dive-bomber
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
    // 12x10 pixel grid for heavy armored Chaser gunship
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
    // 4x2 pixel pulse shot
    return this.makeTexture(4, 2, (ctx) => {
      ctx.clearRect(0, 0, 4, 2);
      ctx.fillStyle = "#265c3f";
      ctx.fillRect(0, 0, 4, 2);
      ctx.fillStyle = "#0f2a1d";
      ctx.fillRect(1, 0, 2, 2);
    });
  }

  static createEnemyProjectileTexture(): THREE.CanvasTexture {
    // 4x4 pixel pulsing energy orb
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
    // 2x2 solid pixel particle
    return this.makeTexture(2, 2, (ctx) => {
      ctx.fillStyle = "#0f2a1d";
      ctx.fillRect(0, 0, 2, 2);
    });
  }

  static createTitanWardenTexture(enraged: boolean = false): THREE.CanvasTexture {
    // 32x24 pixel grid for armored command dreadnought
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

      // 1. Heavy Armor Hull / Silhouette (Ink outline base)
      // Main central fuselage
      pRect(6, 8, 23, 8, ink);
      pRect(4, 9, 26, 6, ink);
      pRect(2, 10, 29, 4, ink);

      // Upper & lower forward cannon turrets
      pRect(2, 5, 14, 3, ink);
      pRect(2, 16, 14, 3, ink);

      // Upper & lower armor wings / nacelles
      pRect(12, 2, 16, 6, ink);
      pRect(12, 16, 16, 6, ink);
      pRect(15, 1, 12, 2, ink);
      pRect(15, 21, 12, 2, ink);

      // 2. Armor Plating Core Fill (#265c3f)
      pRect(7, 9, 21, 6, core);
      pRect(3, 11, 27, 2, core);

      // Cannons fill
      pRect(3, 6, 12, 1, core);
      pRect(3, 17, 12, 1, core);

      // Wings fill
      pRect(13, 3, 14, 4, core);
      pRect(13, 17, 14, 4, core);
      pRect(16, 2, 10, 1, core);
      pRect(16, 21, 10, 1, core);

      // 3. Armor Seams & Highlights (#528f65)
      // Wing panel highlights
      pRect(14, 4, 10, 1, highlight);
      pRect(14, 19, 10, 1, highlight);
      // Cannon muzzle emitters
      pRect(1, 5, 2, 3, highlight);
      pRect(1, 16, 2, 3, highlight);
      // Nose plating highlight
      pRect(3, 11, 2, 2, highlight);
      pRect(8, 10, 1, 4, highlight);
      // Bridge visor slit
      pRect(10, 11, 3, 2, ink);
      pRect(11, 11, 2, 1, highlight);

      // 4. Heavy Engine Exhaust Manifolds (Right edge)
      pRect(28, 4, 3, 2, ink);
      pRect(28, 18, 3, 2, ink);
      pRect(29, 10, 3, 4, ink);
      pRect(30, 11, 2, 2, highlight);

      // 5. Exposed Central Reactor Core
      // Core housing frame
      pRect(16, 8, 7, 8, ink);
      // Glowing core matrix
      pRect(17, 9, 5, 6, reactorGlow);
      pRect(18, 10, 3, 4, reactor);
      // Central energy pulse pip
      pRect(19, 11, 1, 2, enraged ? "#ffffff" : "#0f2a1d");
    });
  }
}
