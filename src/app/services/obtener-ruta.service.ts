import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rutas, Vuelos } from '../models/rutas';
import { Params } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ObtenerRutaService {

  constructor( private http: HttpClient ) { }

  //variable privada url de bd : https://recruiting-api.newshore.es/api/flights/2

  private url: string = 'https://recruiting-api.newshore.es/api/flights/2';


  getAllVuelos():Observable<Vuelos[]>{

    //funcion getAllVuelos donde se llama la url de la bd se mapea la informacion se transforma
    //en transformSmallVuelos
    
    return this.http.get<Rutas>(`${ this.url }`)
        .pipe(
          map( this.transformSmallVuelos ),

          //se implemente el metodo pipe catchError

          catchError( err => {
            console.log('Sucedio un error');

            return throwError('Error');
          })
        );
  }
  
  //llamamos la variable creada transformSmallVuelos

  private transformSmallVuelos( resp: Rutas ): Vuelos[]{
    //retornamos en mapeo de la nueva bd y la vamos a mostra en (viaje) 
    return resp.map( (viaje: Params )=> {
      // const vuelosList: Rutas[]=

      const urlArr = viaje['url'];
      const origin = urlArr;
      
      //Retornamos y asignamos ya los valores mapeados y asignamos los nombres que
      //corresponde a cada atributo de la bd; ejemplo : origin: viaje['departureStation'],
      
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
