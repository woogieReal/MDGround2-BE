import { Injectable } from '@nestjs/common';
import { CreateTreeDto } from './dto/create-tree.dto';
import { UpdateTreeDto } from './dto/update-tree.dto';

@Injectable()
export class TreesService {
  async create(createTreeDto: CreateTreeDto) {
    return createTreeDto;
  }

  async findAll() {
    return `This action returns all trees`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} tree`;
  }

  async update(id: number, updateTreeDto: UpdateTreeDto) {
    return `This action updates a #${id} tree`;
  }

  async remove(id: number) {
    return `This action removes a #${id} tree`;
  }
}
