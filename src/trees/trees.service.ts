import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTreeDto } from './dto/create-tree.dto';
import { RetrieveTreeDto } from './dto/retrieve-tree.dto';
import { UpdateTreeDto } from './dto/update-tree.dto';
import { Tree } from './entities/tree.entity';

@Injectable()
export class TreesService {
  constructor(
    @InjectRepository(Tree) private readonly treesRepository: Repository<Tree>,
  ) {}

  async create(createTreeDto: CreateTreeDto) {
    const { maxTreeId } = await this.treesRepository
      .createQueryBuilder('tr')
      .select('MAX(tr.id)', 'maxTreeId')
      .where('tr.user = :user', { user: createTreeDto.user })
      .getRawOne();

    const { maxSeq } = await this.treesRepository
      .createQueryBuilder('tr')
      .select('COALESCE(MAX(tr.seq), 0)', 'maxSeq')
      .where('tr.user = :user', { user: createTreeDto.user })
      .andWhere('tr.parent = :parent', { parent: createTreeDto.parent })
      .andWhere('tr.type = :type', { type: createTreeDto.type })
      .andWhere('tr.delete_yn = :delete_yn', { delete_yn: 'N' })
      .getRawOne();

    const tree = this.treesRepository.create({
      ...createTreeDto,
      id: maxTreeId + 1,
      seq: maxSeq + 1,
    });

    await this.treesRepository.save(tree);
    return tree;
  }

  async findAll(retrieveTreeDto: RetrieveTreeDto) {
    return await this.treesRepository.find({
      where: retrieveTreeDto,
      order: {
        seq: 'ASC',
      },
    });
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
