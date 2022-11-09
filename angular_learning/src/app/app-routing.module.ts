import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'kasir',
    loadChildren:()=>import('./kasir/kasir.module').then(mod=>mod.KasirModule),
  },
  {
    path :'admin',
    loadChildren:()=>import('./admin/admin.module').then(mod=> mod.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }