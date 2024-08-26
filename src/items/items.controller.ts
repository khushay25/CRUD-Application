import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Item {
    return this.itemsService.findOne(+id);
  }

  @Post()
  create(@Body() item: Item) {
    this.itemsService.create(item);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedItem: Item) {
    this.itemsService.update(+id, updatedItem);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.itemsService.delete(+id);
  }
}
