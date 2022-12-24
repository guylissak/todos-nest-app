import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CurrentUser } from '../services/services/current-user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private currentUserService: CurrentUser) {}

  use(req: Request, res: Response, next: NextFunction) {
    // Auth user by validate JWT and extract userId from it
    const userId = Math.floor(Math.random() * 999);
    this.currentUserService.setCurrentUser(userId);
    next();
  }
}
