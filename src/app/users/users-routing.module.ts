import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersAddComponent } from './users-add/users-add.component';

import { UserRolesAddComponent } from 'app/users/user-roles-add/user-roles-add.component';
import { UserRolesEditComponent } from 'app/users/user-roles-edit/user-roles-edit.component';
import { UserRolesListComponent } from 'app/users/user-roles-list/user-roles-list.component';
import { UserRolesViewComponent } from 'app/users/user-roles-view/user-roles-view.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users-list',
        component: UsersListComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'users-view',
        component: UsersViewComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'users-edit',
        component: UsersEditComponent,
        data: {
          title: 'Edit'
        }
      },
      {
        path: 'users-add',
        component: UsersAddComponent,
        data: {
          title: 'Create'
        }
      },
      {
        path: 'user-roles-list',
        component: UserRolesListComponent,
        data: {
          title: 'User Roles List'
        }
      },
      {
        path: 'user-roles-view',
        component: UserRolesViewComponent,
        data: {
          title: 'User Roles View'
        }
      },
      {
        path: 'user-roles-edit',
        component: UserRolesEditComponent,
        data: {
          title: 'User Roles Edit'
        }
      },
      {
        path: 'user-roles-add',
        component: UserRolesAddComponent,
        data: {
          title: 'Create'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
