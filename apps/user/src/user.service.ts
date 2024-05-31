import { Injectable } from '@nestjs/common';
import { getListUserDto } from './user.dto';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!';
  }

  async getListUserRabbit(payload: getListUserDto) {
    const { skip, take } = payload;
    return {
      message: 'ok',
      skip,
      take,
    };
  }
}
