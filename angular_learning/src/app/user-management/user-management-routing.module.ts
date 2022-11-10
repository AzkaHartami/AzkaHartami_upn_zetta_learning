import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'list',
    pathMatch: 'full',
    component: UserListComponent
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: UserCreationComponent
  },
  {
    path: 'edit/:id',
    pathMatch: 'full',
    component: UserEditComponent
  },
  {
    path: 'detail/:id',
    pathMatch: 'full',
    component: UserDetailComponent
  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }