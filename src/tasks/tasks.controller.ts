import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity, ApiQuery } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@ApiTags('Tasks API')
@ApiSecurity('access-token')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle tâche' })
  @ApiResponse({ 
    status: 201, 
    description: 'La tâche a été créée avec succès.',
    type: Task,
  })
  @ApiResponse({ status: 400, description: 'Données invalides.' })
  @ApiResponse({ status: 401, description: 'Non autorisé - Token manquant ou invalide.' })
  create(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les tâches ou une tâche par titre' })
  @ApiQuery({ 
    name: 'title', 
    required: false, 
    description: 'Filtrer par titre de tâche',
    example: 'Faire les courses',
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Liste des tâches ou une tâche spécifique.',
    type: [Task],
  })
  @ApiResponse({ status: 404, description: 'Tâche non trouvée (si recherche par titre).' })
  @ApiResponse({ status: 401, description: 'Non autorisé - Token manquant ou invalide.' })
  findAll(@Query('title') title?: string): Task | Task[] {
    if (title) {
      return this.tasksService.findByTitle(title);
    }
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une tâche par son ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Tâche trouvée.',
    type: Task,
  })
  @ApiResponse({ status: 404, description: 'Tâche non trouvée.' })
  @ApiResponse({ status: 401, description: 'Non autorisé - Token manquant ou invalide.' })
  findOne(@Param('id') id: string): Task {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modifier partiellement une tâche' })
  @ApiResponse({ 
    status: 200, 
    description: 'La tâche a été mise à jour.',
    type: Task,
  })
  @ApiResponse({ status: 404, description: 'Tâche non trouvée.' })
  @ApiResponse({ status: 400, description: 'Données invalides.' })
  @ApiResponse({ status: 401, description: 'Non autorisé - Token manquant ou invalide.' })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Task {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Supprimer une tâche par son ID' })
  @ApiResponse({ status: 204, description: 'La tâche a été supprimée avec succès.' })
  @ApiResponse({ status: 404, description: 'Tâche non trouvée.' })
  @ApiResponse({ status: 401, description: 'Non autorisé - Token manquant ou invalide.' })
  remove(@Param('id') id: string): void {
    this.tasksService.remove(+id);
  }
}
