import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private _userSevice: UserService, private router: Router) { }

  getUsers(): void {
    this._userSevice.getAllUsers()
      .then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  addUser(): void {
    this.router.navigateByUrl('users/form');
  }

  goToEditUser(user: User):void {
    let link = 'users/form/' + user.id;
    this.router.navigateByUrl(link);
  }

}
