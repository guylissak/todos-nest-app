import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
// @Injectable()
export class CurrentUser {
  private userId: number;

  getCurrentUser() {
    return this.userId;
  }

  setCurrentUser(userId) {
    this.userId = userId;
  }
}
