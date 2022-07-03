import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './assets/error/error.component';
import { IndexComponent } from './assets/index/index.component';

const routes: Routes = [

  {
    path: 'index',
    component: IndexComponent,
  },{
    path: '',
    pathMatch: 'full',
    redirectTo:'/index'
  },{
    path: 'buscar-ruta',
    loadChildren: () => import( './modulos/buscar-ruta/buscar-ruta.module').then(m => m.BuscarRutaModule )
  },{
    path: 'obtener-ruta',
    loadChildren: () => import( './modulos/obtener-ruta/obtener-ruta.module').then(m => m.ObtenerRutaModule )
  },{
    path: 'moneda',
    loadChildren: () => import( './modulos/moneda/moneda.module').then(m => m.MonedaModule )
  },{
    path: 'error',
    component: ErrorComponent
  },{
    path: '**',
    redirectTo: '/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
