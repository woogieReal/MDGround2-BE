import { Module } from '@nestjs/common';
import { AppController } from './sample/app.controller';
import { AppService } from './sample/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
