import { Post } from './post';
import { ApiProperty } from '@nestjs/swagger';

export class UserRelations {
  @ApiProperty({ isArray: true, type: () => Post })
  posts!: Post[];
}
