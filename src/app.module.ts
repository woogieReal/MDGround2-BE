import { Module } from '@nestjs/common';
import { TreesModule } from './trees/trees.module';

@Module({
  imports: [TreesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
