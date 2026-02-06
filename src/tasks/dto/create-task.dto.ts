import { IsString, IsNotEmpty, IsBoolean, IsDateString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDateString()
  startedAt: Date;

  @IsBoolean()
  isCompleted: boolean;
}
