import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';

const routes : Routes = [
  {
    path: '',
    pathMatch:'full',
    component: CardComponent
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
export class CardRoutingModule { }