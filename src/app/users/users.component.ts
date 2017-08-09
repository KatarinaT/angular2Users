import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private _userSevice: UserService) { }

  getUsers(): void {
    this._userSevice.getAllUsers()
      .then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
