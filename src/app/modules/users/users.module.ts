import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './users.routing';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';

@NgModule({
  imports: [routing, CommonModule, FormsModule],
  declarations: [
    UsersComponent,
    UserFormComponent
  ],
  providers: [UserService],
  exports: [UsersComponent]
})

export class UsersModule { }
