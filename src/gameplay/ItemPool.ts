import { ITEM_POOL_SIZE } from "../core/Constants";
import type { ItemType } from "../core/Types";
import { Item } from "./Item";

export class ItemPool {
  private readonly pool: Item[] = [];

  constructor(size: number = ITEM_POOL_SIZE) {
    for (let i = 0; i < size; i++) {
      this.pool.push(new Item(i));
    }
  }

  acquire(x: number, y: number, type: ItemType): Item | null {
    for (let i = 0; i < this.pool.length; i++) {
      const item = this.pool[i];
      if (!item.active) {
        item.spawn(x, y, type);
        return item;
      }
    }
    return null;
  }

  update(dt: number): void {
    for (let i = 0; i < this.pool.length; i++) {
      const item = this.pool[i];
      if (item.active) {
        item.update(dt);
      }
    }
  }

  clear(): void {
    for (let i = 0; i < this.pool.length; i++) {
      this.pool[i].destroy();
    }
  }

  getAll(): readonly Item[] {
    return this.pool;
  }
}
