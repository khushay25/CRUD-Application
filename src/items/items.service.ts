import { Injectable } from '@nestjs/common';
import { Item } from './items.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    return this.items.find((item) => item.id === id);
  }

  create(item: Item) {
    this.items.push({ ...item, id: this.items.length + 1 });
  }

  update(id: number, updatedItem: Item) {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      this.items[itemIndex] = { ...updatedItem, id };
    }
  }

  delete(id: number) {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      this.items.splice(itemIndex, 1);
    }
  }
}
