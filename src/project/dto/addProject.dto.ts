import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class addProjectDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Project Name' })
  name: string;
}
