import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { TreesService } from './trees.service';
import { CreateTreeDto } from './dto/create-tree.dto';
import { UpdateTreeDto } from './dto/update-tree.dto';

@Controller('trees')
export class TreesController {
  constructor(private readonly treesService: TreesService) {}

  @Post()
  @HttpCode(200)
  async create(@Body() createTreeDto: CreateTreeDto) {
    return await this.treesService.create(createTreeDto);
  }

  @Get()
  async findAll() {
    return this.treesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.treesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTreeDto: UpdateTreeDto) {
    return this.treesService.update(+id, updateTreeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.treesService.remove(+id);
  }
}
