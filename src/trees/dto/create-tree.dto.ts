import { IsNotEmpty } from 'class-validator';

export class CreateTreeDto {
  @IsNotEmpty() type: number; // 10: folder, 20: file
  @IsNotEmpty() name: string;
  @IsNotEmpty() content: string;
  @IsNotEmpty() parent: number;
  @IsNotEmpty() user: string;
}
