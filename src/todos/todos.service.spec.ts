import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { TodosTestRepository } from './todos-mock.repository';
import { TODOS_REPOSITORY } from './constants';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodosService,
        {
          provide: TODOS_REPOSITORY,
          useClass: TodosTestRepository,
        },
      ],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should include 3 todos', () => {
    const todos = service.findAll();
    expect(Object.keys(todos)).toHaveLength(3);
  });
});
