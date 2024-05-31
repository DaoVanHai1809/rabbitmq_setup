import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { RmqService } from '@app/common';

dotenv.config();
async function bootstrap() {
  const port = process.env.USER_PORT || 3000;
  const app = await NestFactory.create(UserModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('USER'));
  await app.startAllMicroservices();
  await app.listen(port);
  Logger.log(`🚀 Application user is running on: http://localhost:${port}`);
}
bootstrap();
