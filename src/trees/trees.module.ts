import { Module } from '@nestjs/common';
import { TreesService } from './trees.service';
import { TreesController } from './trees.controller';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreeRepository } from './tree.repository';

@Module({
  controllers: [TreesController],
  providers: [TreesService],
  imports: [UsersModule, TypeOrmModule.forFeature([TreeRepository])],
  exports: [],
})
export class TreesModule {}
