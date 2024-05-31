import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { RmqModule } from '@app/common';

@Module({
  imports: [RmqModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
