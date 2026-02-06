import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsDateString, IsOptional } from 'class-validator';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'Le titre de la tâche',
    example: 'Faire les courses',
    required: false,
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({
    description: 'La date de début de la tâche',
    example: '2026-02-06',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  startedAt?: Date;

  @ApiProperty({
    description: 'Indique si la tâche est terminée',
    example: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;
}
