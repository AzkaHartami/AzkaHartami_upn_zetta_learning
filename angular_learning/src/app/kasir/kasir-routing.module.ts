import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KasirComponent } from './kasir/kasir.component';

const routes : Routes = [
  {
    path: '',
    pathMatch:'full',
    component: KasirComponent
  },
  {
    path: '**',
    pathMatch:'full',
    redirectTo:''
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KasirRoutingModule { }