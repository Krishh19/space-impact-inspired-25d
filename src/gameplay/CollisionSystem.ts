import type { BoundingBox } from "../core/Types";
import type { Enemy } from "./Enemy";
import type { EnemyPool } from "./EnemyPool";
import type { Item } from "./Item";
import type { ItemPool } from "./ItemPool";
import type { Player } from "./Player";
import type { Projectile } from "./Projectile";
import type { ProjectilePool } from "./ProjectilePool";
import type { TitanWarden } from "./boss/TitanWarden";

export class CollisionSystem {
  // Reusable bounding box instances to prevent per-frame allocations
  private readonly boundA: BoundingBox = { x: 0, y: 0, width: 0, height: 0 };
  private readonly boundB: BoundingBox = { x: 0, y: 0, width: 0, height: 0 };

  checkAABB(a: BoundingBox, b: BoundingBox): boolean {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }

  checkProjectileEnemyCollisions(
    projectilePool: ProjectilePool,
    enemyPool: EnemyPool,
    onHit: (enemy: Enemy, projectile: Projectile, killed: boolean) => void
  ): void {
    const projectiles = projectilePool.getAll();
    const enemies = enemyPool.getAll();

    for (let i = 0; i < projectiles.length; i++) {
      const proj = projectiles[i];
      if (!proj.active || proj.owner !== "player") continue;

      proj.getBounds(this.boundA);

      for (let j = 0; j < enemies.length; j++) {
        const enemy = enemies[j];
        if (!enemy.active) continue;

        enemy.getBounds(this.boundB);

        if (this.checkAABB(this.boundA, this.boundB)) {
          const killed = enemy.takeDamage(proj.damage);
          proj.destroy();
          onHit(enemy, proj, killed);
          break; // Projectile is consumed
        }
      }
    }
  }

  checkEnemyProjectilePlayerCollisions(
    projectilePool: ProjectilePool,
    player: Player,
    onHit: (projectile: Projectile, playerKilled: boolean) => void
  ): void {
    if (!player.active || player.invulnerabilityTimer > 0) return;

    player.getBounds(this.boundA);
    const projectiles = projectilePool.getAll();

    for (let i = 0; i < projectiles.length; i++) {
      const proj = projectiles[i];
      if (!proj.active || proj.owner !== "enemy") continue;

      proj.getBounds(this.boundB);

      if (this.checkAABB(this.boundA, this.boundB)) {
        proj.destroy();
        const playerKilled = player.takeDamage();
        onHit(proj, playerKilled);
        break;
      }
    }
  }

  checkPlayerEnemyCollisions(
    player: Player,
    enemyPool: EnemyPool,
    onHit: (enemy: Enemy, playerKilled: boolean) => void
  ): void {
    if (!player.active || player.invulnerabilityTimer > 0) return;

    player.getBounds(this.boundA);
    const enemies = enemyPool.getAll();

    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
      if (!enemy.active) continue;

      enemy.getBounds(this.boundB);

      if (this.checkAABB(this.boundA, this.boundB)) {
        // Player takes damage; enemy also gets destroyed on impact
        enemy.destroy();
        const playerKilled = player.takeDamage();
        onHit(enemy, playerKilled);
        break;
      }
    }
  }

  checkProjectileBossCollisions(
    projectilePool: ProjectilePool,
    boss: TitanWarden,
    onHit: (projectile: Projectile, killed: boolean) => void
  ): void {
    if (!boss.active || boss.isInvulnerable()) return;

    boss.getBounds(this.boundB);
    const projectiles = projectilePool.getAll();

    for (let i = 0; i < projectiles.length; i++) {
      const proj = projectiles[i];
      if (!proj.active || proj.owner !== "player") continue;

      proj.getBounds(this.boundA);

      if (this.checkAABB(this.boundA, this.boundB)) {
        proj.destroy();
        const { killed, hit } = boss.takeDamage(proj.damage);
        if (hit) {
          onHit(proj, killed);
        }
      }
    }
  }

  checkPlayerBossCollision(
    player: Player,
    boss: TitanWarden,
    onHit: (playerKilled: boolean) => void
  ): void {
    if (!player.active || player.invulnerabilityTimer > 0) return;
    if (!boss.active || boss.state === "DEFEATED") return;

    player.getBounds(this.boundA);
    boss.getBounds(this.boundB);

    if (this.checkAABB(this.boundA, this.boundB)) {
      const playerKilled = player.takeDamage();
      onHit(playerKilled);
    }
  }

  checkPlayerItemCollisions(
    itemPool: ItemPool,
    player: Player,
    onCollect: (item: Item) => void
  ): void {
    if (!player.active) return;

    player.getBounds(this.boundA);
    const items = itemPool.getAll();

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (!item.active) continue;

      item.getBounds(this.boundB);

      if (this.checkAABB(this.boundA, this.boundB)) {
        item.destroy();
        onCollect(item);
      }
    }
  }
}
