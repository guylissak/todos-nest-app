import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { LoggingService } from 'src/logging/logging.service';
import { CurrentUser } from '../services/services/current-user.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(
    private logger: LoggingService,
    private currentUser: CurrentUser,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // This code will run before the route handler
    const { path, method } = context.switchToHttp().getRequest();
    const start = Date.now();
    this.logger.info(
      `BEFORE userId - ${this.currentUser.getCurrentUser()} - url ${path} method ${method}`,
    );

    // This code will run after the route handler
    return next.handle().pipe(
      tap((res) => {
        const { statusCode } = context.switchToHttp().getResponse();

        this.logger.info(
          `AFTER userId - ${this.currentUser.getCurrentUser()} - status ${statusCode} response ${JSON.stringify(
            res,
            null,
            2,
          )} req time - ${Date.now() - start}ms`,
        );
      }),
    );
  }
}
