import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';
import { NormalizeResponseInterceptor } from 'src/common/interceptors/normalize-response.interceptor';
import { CreateToDoDto } from './dtos/create-todo.dto';
import { Todos } from './interfaces/todos.interface';
import { TodosService } from './todos.service';

@UseInterceptors(LoggingInterceptor)
@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post()
  createTodo(@Body() body: CreateToDoDto): string {
    return this.todosService.createTodo(body.todo);
  }

  @Get()
  async getAllTodos(): Promise<Todos> {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return this.todosService.findAll();
  }

  @Get('/:id')
  getTodoById(@Param('id') id: string): { todo: string } {
    const todo = this.todosService.findOneTodo(id);

    return {
      todo: todo,
    };
  }
}
