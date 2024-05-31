import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { USER_SERVICE } from './constants';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject(USER_SERVICE) private client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    try {
      console.log('start call user service');
      const getUsersResult = await firstValueFrom(
        this.client.send('get-list-users', {
          skip: 0,
          take: 10,
        }),
      );
      return getUsersResult;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
