import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RmqModule } from '@app/common';

@Module({
  imports: [RmqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
