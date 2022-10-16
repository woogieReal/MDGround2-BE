import { Module } from '@nestjs/common';
import { TreesService } from './trees.service';
import { TreesController } from './trees.controller';
import { UsersModule } from 'src/users/users.module';
import { Tree } from './entities/tree.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TreesController],
  providers: [TreesService],
  imports: [TypeOrmModule.forFeature([Tree]), UsersModule],
  exports: [],
})
export class TreesModule {}
