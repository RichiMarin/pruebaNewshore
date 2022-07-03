import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Flight, Rutas } from '../modelos';

@Injectable({
  providedIn: 'root'
})
export class BuscarRutaService {

  private data: Flight[] = []

  private apiUrl = 'https://recruiting-api.newshore.es/api/flights/2';
 
  constructor( private http: HttpClient ) {}

  cargarVuelos(){

    

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
