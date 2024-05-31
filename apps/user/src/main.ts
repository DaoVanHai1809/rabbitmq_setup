import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();
async function bootstrap() {
  const port = process.env.USER_PORT || 3000;
  const app = await NestFactory.create(UserModule);
  await app.listen(3000);
  Logger.log(`🚀 Application user is running on: http://localhost:${port}`);
}
bootstrap();
