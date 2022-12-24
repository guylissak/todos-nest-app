import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { ITodosRepository } from './interfaces/todos-repository.interface';
import { Todos } from './interfaces/todos.interface';
import { TODOS_REPOSITORY } from './constants';
import { LoggingService } from 'src/logging/logging.service';

@Injectable()
export class TodosService {
  constructor(
    @Inject(TODOS_REPOSITORY)
    private repostory: ITodosRepository<Todos>,
    private logger: LoggingService,
  ) {}

  findOneTodo(id: string): string {
    const todo = this.repostory.findOne(id);
    if (!todo) {
      this.logger.error(`todo ${id} not found`);
      throw new NotFoundException('todo not found');
    }

    return todo;
  }

  findAll(): Todos {
    return this.repostory.findAll();
  }

  createTodo(todo: string): string {
    return this.repostory.create(todo);
  }
}
