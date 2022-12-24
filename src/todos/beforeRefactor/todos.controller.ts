import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateToDoDto } from '../dtos/create-todo.dto';
import { Todos } from '../interfaces/todos.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  private todosService: TodosService;
  constructor() {
    this.todosService = new TodosService();
  }

  @Post()
  createTodo(@Body() body: CreateToDoDto): string {
    return this.todosService.createTodo(body.todo);
  }

  @Get()
  async getAllTodos(): Promise<Todos> {
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
