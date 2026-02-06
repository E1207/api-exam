import { IsString, IsNotEmpty, IsBoolean, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Le titre de la tâche',
    example: 'Faire les courses',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'La date de début de la tâche',
    example: '2026-02-06',
    required: true,
  })
  @IsDateString()
  startedAt: Date;

  @ApiProperty({
    description: 'Indique si la tâche est terminée',
    example: false,
    required: true,
  })
  @IsBoolean()
  isCompleted: boolean;
}
