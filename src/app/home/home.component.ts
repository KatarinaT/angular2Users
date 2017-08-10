import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getAllUsers()
      .then(users => {
        users.sort(function (left, right) {
          return moment.utc(right.createdDate).diff(moment.utc(left.createdDate))
        });
        this.users = users.slice(0, 5)
      })
  }

}
