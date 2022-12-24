import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TodosRepository } from './todos.repository';
import { TODOS_REPOSITORY } from './constants';
import { LoggingModule } from 'src/logging/logging.module';
import { AuthMiddleware } from 'src/common/middlewares/auth.middleware';
import { CurrentUser } from 'src/common/services/services/current-user.service';

@Module({
  imports: [LoggingModule],
  providers: [
    CurrentUser,
    TodosService,
    {
      provide: TODOS_REPOSITORY,
      useClass: TodosRepository,
    },
  ],
  controllers: [TodosController],
})
export class TodosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
