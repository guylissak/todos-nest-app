import { IsString, IsNotEmpty } from 'class-validator';

export class CreateToDoDto {
  @IsString()
  @IsNotEmpty()
  todo: string;
}
