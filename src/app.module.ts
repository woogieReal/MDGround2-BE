import { Module } from '@nestjs/common';
import { TreesModule } from './trees/trees.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TreesModule, UsersModule],
})
export class AppModule {}
