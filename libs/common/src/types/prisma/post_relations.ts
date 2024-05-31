import { User } from './user';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PostRelations {
  @ApiPropertyOptional({ type: () => User })
  author?: User;
}
