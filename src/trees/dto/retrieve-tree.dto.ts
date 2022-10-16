import { IsNotEmpty } from 'class-validator';

export class RetrieveTreeDto {
  @IsNotEmpty() user: string;
  @IsNotEmpty() parent: number;
}
