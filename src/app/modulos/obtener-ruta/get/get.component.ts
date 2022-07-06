import { Component, OnInit } from '@angular/core';
import { Rutas,  } from 'src/app/models';
import { Flight } from '../../../models/flight';
import { ObtenerRutaService } from '../../../services/obtener-ruta.service';
import { Vuelos } from '../../../models/rutas';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: []

})
export class GetComponent implements OnInit {

  constructor( private obtenerRutaService : ObtenerRutaService ) { }

  //Creacion de variables

  filterPost = '';
  filterPost2 = '';
  public search: string = '';
  public search2: string = '';
  vuelosOrigen: Vuelos[] = [];
  hayError: boolean = false;

  ngOnInit(): void {

    //Llamado del servicio obtener-ruta.service.ts

    this.hayError = false;

    this.obtenerRutaService.getAllVuelos()
      .subscribe(vuelosOrigen => {
        this.vuelosOrigen = vuelosOrigen;
      }, (err) => {
        this.hayError = true;
      })

  }

  //Llamado de las funciones de filtrado por origen y destino

  onSearchVuelos( search: string ){
    this.search = search;
    
  }

  onSearchVuelos2( search2: string ){
    if(this.search2 !== this.search)
    console.log('no son iguales');
    this.search2 = search2;
      
  }

}
