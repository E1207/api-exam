import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty({
    description: 'Identifiant unique de la tâche',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Le titre de la tâche',
    example: 'Faire les courses',
  })
  title: string;

  @ApiProperty({
    description: 'La date de début de la tâche',
    example: '2026-02-06T00:00:00.000Z',
  })
  startedAt: Date;

  @ApiProperty({
    description: 'Indique si la tâche est terminée',
    example: false,
  })
  isCompleted: boolean;
}
