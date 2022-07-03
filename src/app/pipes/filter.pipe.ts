import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Vuelos } from '../modelos/rutas';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(flights: Vuelos[], arg: any, search: string = ''): Vuelos[] {

    if( search.length === 0 || search.length > 3)

    return flights.slice(0,0);

    // alert("No se encontro informacion de origen, debe ingresar tres letras en Mayuscula, Ejem: MZL");

    const filteredVuelos = flights.filter( vuel => vuel.origin.includes( search));

    return filteredVuelos ;

    



  }

    transform2(flights2: Vuelos[], arg: any, search2: string = ''): Vuelos[] {

    if( search2.length === 0 || search2.length > 3)

     return flights2.slice(0,0);

     // alert("No se encontro informacion de origen, debe ingresar tres letras en Mayuscula, Ejem: MZL");
     
    const filteredVuelos2 = flights2.filter( vuel => vuel.destination.includes( search2));

    return filteredVuelos2 ;

  

  }

  

 
//   transform(value: any, arg: any): any {
//     if(arg === '' || arg.length <= 3 ) return value;
//     const resultViaje = [];
//     for(const vuelosOrig of value){
//       if(vuelosOrig.title.indexOf(arg)>-1){
//         resultViaje.push(vuelosOrig);
//       }
//     }
//     return resultViaje;
//   }

}