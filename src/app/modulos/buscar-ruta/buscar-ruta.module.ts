import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarRutaRoutingModule } from './buscar-ruta-routing.module';
import { GetComponent } from './get/get.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetComponent
  ],
  imports: [
    CommonModule,
    BuscarRutaRoutingModule,
    FormsModule
  ]
})
export class BuscarRutaModule { }
