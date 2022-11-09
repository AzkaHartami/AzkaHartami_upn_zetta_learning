import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KasirRoutingModule } from './kasir-routing.module';
import { KasirComponent } from './kasir/kasir.component';
import { BayarComponent } from './bayar/bayar.component';


@NgModule({
  declarations: [
    KasirComponent,
    BayarComponent
  ],
  imports: [
    CommonModule,
    KasirRoutingModule
  ]
})
export class KasirModule { }