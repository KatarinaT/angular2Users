import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable()

export class UserService {
  getAllUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUser(id: number): Promise<User> {
    return this.getAllUsers()
      .then(users => users.find(user => user.id === id))
  }

  save(user: User): Promise<User> {
    let isExist = USERS.map(({id}) => id).indexOf(user.id);
    if (isExist === -1) {
      USERS.push(user);
    }

    return Promise.resolve(user);
  }
}
