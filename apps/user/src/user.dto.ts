import { IsInt } from 'class-validator';

export class getListUserDto {
  @IsInt()
  skip: number = 0;

  @IsInt()
  take?: number = 100;
}
