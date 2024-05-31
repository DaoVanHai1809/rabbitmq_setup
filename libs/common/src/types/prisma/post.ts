import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Post {
  @ApiProperty({ type: Number })
  id!: number;

  @ApiProperty({ type: String })
  title!: string;

  @ApiPropertyOptional({ type: String })
  content?: string;

  @ApiPropertyOptional({ type: Boolean })
  published?: boolean;

  @ApiPropertyOptional({ type: Number })
  authorId?: number;
}
