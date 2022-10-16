import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTreeDto } from './dto/create-tree.dto';
import { UpdateTreeDto } from './dto/update-tree.dto';
import { Tree } from './entities/tree.entity';

@Injectable()
export class TreesService {
  constructor(
    @InjectRepository(Tree) private readonly treesRepository: Repository<Tree>,
  ) {}

  async create(createTreeDto: CreateTreeDto) {
    const tree = this.treesRepository.create({ ...createTreeDto, id: 1 });

    await this.treesRepository.save(tree);
    return tree;
  }

  async findAll() {
    return await this.treesRepository.find();
  }

  async findOne(id) {
    return await this.treesRepository.findOne(id);
  }

  async update(id: number, updateTreeDto: UpdateTreeDto) {
    return `This action updates a #${id} tree`;
  }

  async remove(id: number) {
    return `This action removes a #${id} tree`;
  }
}
