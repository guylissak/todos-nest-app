import { Injectable } from '@nestjs/common';
import { ITodosRepository } from './interfaces/todos-repository.interface';
import { Todos } from './interfaces/todos.interface';

const todos: Todos = {};

@Injectable()
export class TodosRepository implements ITodosRepository<Todos> {
  findOne(id: string): string {
    return todos[id];
  }

  findAll(): Todos {
    return todos;
  }

  create(todo: string): string {
    const id = Math.floor(Math.random() * 999).toString();
    todos[id] = todo;

    return id;
  }
}
