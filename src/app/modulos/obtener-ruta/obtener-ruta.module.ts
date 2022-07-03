import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ObtenerRutaRoutingModule } from './obtener-ruta-routing.module';
import { GetComponent } from './get/get.component';
import { MainPipeModule } from 'src/app/main-pipe/main-pipe.module';


@NgModule({
  declarations: [
    GetComponent
  ],
  imports: [
    CommonModule,
    ObtenerRutaRoutingModule,
    FormsModule,
    MainPipeModule
    
  ]
})
export class ObtenerRutaModule { }
