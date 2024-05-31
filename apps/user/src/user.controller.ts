import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { getListUserDto } from './user.dto';
import { RmqService } from '@app/common';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @MessagePattern('get-list-users')
  async getListUserRabbit(
    @Payload() payload: getListUserDto,
    @Ctx() context: RmqContext,
  ) {
    const result = await this.userService.getListUserRabbit(payload);
    await this.rmqService.ackRabbitMq(context);
    return result;
  }
}
