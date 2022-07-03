import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rutas, Vuelos } from '../modelos/rutas';
import { Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ObtenerRutaService {

  constructor( private http: HttpClient ) { }

  private url: string = 'https://recruiting-api.newshore.es/api/flights/2';


  getAllVuelos():Observable<Vuelos[]>{
    
    return this.http.get<Rutas>(`${ this.url }`)
        .pipe(
          map( this.transformSmallVuelos )
        )
  }
  
  private transformSmallVuelos( resp: Rutas ): Vuelos[]{

    return resp.map( (viaje: Params )=> {
      // const vuelosList: Rutas[]=

      const urlArr = viaje['url'];
      const origin = urlArr;
            
      return {
        origin: viaje['departureStation'],
        destination: viaje['arrivalStation'],
        flightCarrier: viaje['flightCarrier'],
        flightNumber:  viaje['flightNumber'],
        price: viaje['price']
      }

      

      
    })

     
  }


}
