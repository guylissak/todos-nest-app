import { NotFoundException } from '@nestjs/common';
import { Todos } from '../interfaces/todos.interface';
import { TodosRepository } from './todos.repository';

export class TodosService {
  public repository: TodosRepository;
  constructor() {
    this.repository = new TodosRepository();
  }

  findOneTodo(id: string): string {
    const todo = this.repository.findOne(id);
    if (!todo) {
      console.error(`todo ${id} not found`);
      throw new NotFoundException('todo not found');
    }

    return todo;
  }

  findAll(): Todos {
    return this.repository.findAll();
  }

  createTodo(todo: string): string {
    return this.repository.create(todo);
  }
}
