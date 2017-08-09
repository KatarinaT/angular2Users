import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable()

export class UserService {
  getAllUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }
}
