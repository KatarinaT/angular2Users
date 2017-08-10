import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  title: string = 'Добавление';
  user: User = new User();

  constructor(
    private _userService: UserService,
    private activeRoute: ActivatedRoute,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap
      .switchMap((params: ParamMap) => this._userService.getUser(+params.get('id')))
      .subscribe(user => {
        if (user instanceof Object) {
          this.user = user;
          this.title = 'Редактирование';
        } else {
          this.user = new User();
        }
      });
  }

  onSubmit(user: User): void {
    this._userService.save(this.user)
      .then(() => this.goToUsers());
  }

  goToUsers(): void {
    this.route.navigateByUrl('/users');
  }
}
