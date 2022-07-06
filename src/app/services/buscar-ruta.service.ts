import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Flight, Rutas } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BuscarRutaService {

  //se crea variable privada data que es giaul a la clase Flight como objecto vacio

  private data: Flight[] = []

  //varible url de la bd :https://recruiting-api.newshore.es/api/flights/2

  private apiUrl = 'https://recruiting-api.newshore.es/api/flights/2';
 
  constructor( private http: HttpClient ) {}

  cargarVuelos(){

    //metodo de cargar vuelos: se mapea la bd https://recruiting-api.newshore.es/api/flights/2
    //en la clase Modelos Flight: se retorna la ruta se llama el pipe y el map nos retorna el
    //arreglo user y se crea una nueva instancia Flight(user con los atributos de la bd inicial)

    return this.http.get<Rutas>( this.apiUrl )
      .pipe(
        map( resp => {
          return resp.map( (user: any) => {
             return new Flight( user.departureStation, user.arrivalStation, user.flightCarrier,
                       user.flightNumber, user.price)
        })
      })

    )
    
  }

}
