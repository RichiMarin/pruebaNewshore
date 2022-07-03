import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonedaRoutingModule } from './moneda-routing.module';
import { GetComponent } from './get/get.component';


@NgModule({
  declarations: [
    GetComponent
  ],
  imports: [
    CommonModule,
    MonedaRoutingModule
  ]
})
export class MonedaModule { }
