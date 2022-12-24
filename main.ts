import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { TodosModule } from 'src/todos/todos.module';

async function bootstrap() {
  const app = await NestFactory.create(TodosModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  await app.listen(3000);
}
bootstrap();
