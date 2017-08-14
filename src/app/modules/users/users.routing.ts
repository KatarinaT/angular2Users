import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';

const USERS_ROUTES: Routes = [
  { path: 'users',
    children: [
      { path: '', component: UsersComponent },
      { path: 'form', component: UserFormComponent, pathMatch: 'full' },
      { path: 'form/:id', component: UserFormComponent }
    ]
  }
];

export const routing = RouterModule.forChild(USERS_ROUTES);
