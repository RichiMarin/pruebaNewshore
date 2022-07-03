import { Component, OnInit } from '@angular/core';
import { Rutas,  } from 'src/app/modelos';
import { Flight } from '../../../modelos/flight';
import { ObtenerRutaService } from '../../../services/obtener-ruta.service';
import { Vuelos } from '../../../modelos/rutas';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: []

})
export class GetComponent implements OnInit {

  constructor( private obtenerRutaService : ObtenerRutaService ) { }

  filterPost = '';
  filterPost2 = '';
  public search: string = '';
  public search2: string = '';
  vuelosOrigen: Vuelos[] = [];
  hayError: boolean = false;

  ngOnInit(): void {

    this.hayError = false;

    this.obtenerRutaService.getAllVuelos()
      .subscribe(vuelosOrigen => {
        this.vuelosOrigen = vuelosOrigen;
      }, (err) => {
        this.hayError = true;
      })

  }


  onSearchVuelos( search: string ){
    this.search = search;
    
  }

  onSearchVuelos2( search2: string ){
    this.search2 = search2;
    
  }

}
