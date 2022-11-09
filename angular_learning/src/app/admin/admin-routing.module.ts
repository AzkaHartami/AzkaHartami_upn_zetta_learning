import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: ' ' ,
    pathMatch:'full',
    component:ListComponent
  },
  {
    path: 'detail/:id' ,
    pathMatch:'full',
    component:DetailComponent
  },
  {
    path: '**' ,
    pathMatch:'full',
    redirectTo : ' '
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }