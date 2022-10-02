import { Module } from '@nestjs/common';
import { TreesService } from './trees.service';
import { TreesController } from './trees.controller';

@Module({
  controllers: [TreesController],
  providers: [TreesService]
})
export class TreesModule {}
