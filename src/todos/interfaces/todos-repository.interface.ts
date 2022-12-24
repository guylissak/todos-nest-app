export interface ITodosRepository<T> {
  create(todo: string): string;
  findOne(id: string): string;
  findAll(): T;
}
