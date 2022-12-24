import { Injectable, NotFoundException } from '@nestjs/common';
import { ITodosRepository } from './interfaces/todos-repository.interface';
import { Todos } from './interfaces/todos.interface';

const todos: Todos = {
  '1': 'study nestjs',
  '2': 'study clean architecture',
  '3': 'combine both in a workshop',
};

@Injectable()
export class TodosTestRepository implements ITodosRepository<Todos> {
  findOne(id: string): string {
    throw new NotFoundException('This is a mock, please implement it');
  }

  findAll(): Todos {
    return todos;
  }

  create(todo: string): string {
    throw new NotFoundException('This is a mock, please implement it');
  }
}
