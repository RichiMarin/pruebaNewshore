import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './get/get.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: 'get',
    component: GetComponent
  },{
    path: '',
    redirectTo: 'get'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            CommonModule
          ],
  exports: [RouterModule]
})
export class ObtenerRutaRoutingModule { }
