import { PARTICLE_POOL_SIZE } from "../core/Constants";

export class Particle {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
  life = 0;
  maxLife = 0;
  size = 2;
  active = false;

  spawn(x: number, y: number, vx: number, vy: number, maxLife: number, size = 2): void {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.life = maxLife;
    this.maxLife = maxLife;
    this.size = size;
    this.active = true;
  }

  update(dt: number): void {
    if (!this.active) return;

    this.x += this.vx * dt;
    this.y += this.vy * dt;

    // Gentle velocity damping for retro particle dispersal
    this.vx *= 0.92;
    this.vy *= 0.92;

    this.life -= dt;
    if (this.life <= 0) {
      this.active = false;
    }
  }

  getNormalizedLife(): number {
    if (this.maxLife <= 0) return 0;
    return Math.max(0, this.life / this.maxLife);
  }
}

export class ParticlePool {
  private readonly pool: Particle[] = [];

  constructor(size = PARTICLE_POOL_SIZE) {
    for (let i = 0; i < size; i++) {
      this.pool.push(new Particle());
    }
  }

  private acquire(): Particle | null {
    for (let i = 0; i < this.pool.length; i++) {
      if (!this.pool[i].active) {
        return this.pool[i];
      }
    }
    return null;
  }

  emitExplosion(x: number, y: number, count = 10, baseSpeed = 45): void {
    for (let i = 0; i < count; i++) {
      const p = this.acquire();
      if (!p) break;

      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = baseSpeed * (0.6 + Math.random() * 0.8);
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      const life = 0.2 + Math.random() * 0.18;
      const size = Math.random() > 0.4 ? 2.5 : 1.5;

      p.spawn(x, y, vx, vy, life, size);
    }
  }

  emitImpact(x: number, y: number, count = 4): void {
    for (let i = 0; i < count; i++) {
      const p = this.acquire();
      if (!p) break;

      // Spark bounces back slightly to the left
      const angle = Math.PI + (Math.random() - 0.5) * 1.4;
      const speed = 30 + Math.random() * 35;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      const life = 0.08 + Math.random() * 0.08;

      p.spawn(x, y, vx, vy, life, 1.5);
    }
  }

  update(dt: number): void {
    for (let i = 0; i < this.pool.length; i++) {
      if (this.pool[i].active) {
        this.pool[i].update(dt);
      }
    }
  }

  getAll(): readonly Particle[] {
    return this.pool;
  }

  clear(): void {
    for (let i = 0; i < this.pool.length; i++) {
      this.pool[i].active = false;
    }
  }
}
