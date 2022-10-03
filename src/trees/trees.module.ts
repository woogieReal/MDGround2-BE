import { Module } from '@nestjs/common';
import { TreesService } from './trees.service';
import { TreesController } from './trees.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [TreesController],
  providers: [TreesService],
  imports: [UsersModule],
  exports: [],
})
export class TreesModule {}
