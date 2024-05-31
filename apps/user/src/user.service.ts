import { Injectable } from '@nestjs/common';
import { getListUserDto } from './user.dto';
import axios from 'axios';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!';
  }

  async getListUserRabbit(payload: getListUserDto) {
    console.log({ payload });
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );

      return {
        status: 'success',
        data: response.data,
      };
    } catch (err) {
      console.log(err);
      return {
        status: 'failed',
        message: err?.response?.data,
      };
    }
  }

  sendMessage() {
    console.log('message here');
  }
}
