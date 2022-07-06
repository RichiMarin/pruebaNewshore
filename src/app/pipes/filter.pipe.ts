import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Vuelos } from '../models/rutas';

//Se crea carpeta y archivo pipe filter para realizar el filtrado del nuevo Mapeo
//de la bd, se implementan dos funciones tanto para buscar y filtrar por el origen y destino

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(flights: Vuelos[], arg: any, search: string = ''): Vuelos[] {

    //Al ingresar en el buscador no puede ser menor o mayor a 3 letras
    if( search.length === 0 || search.length > 3)
   //En cso de pasar el filtro muetra la informacion
   return flights.slice(0,0);

   //Se intenta implementar un alert pero sale al ingresar la pagina y se repite
   //constantemente

    // alert("No se encontro informacion de origen, debe ingresar tres letras en Mayuscula, Ejem: MZL");

    //Const que retorna los vuelos por origne
    const filteredVuelos = flights.filter( vuel => vuel.origin.includes( search));

    return filteredVuelos ;

    



  }

    //Se implementan los metodos anteniormente descriptos pero con el filtro de Destino

    transform2(flights2: Vuelos[], arg: any, search2: string = ''): Vuelos[] {

    if( search2.length === 0 || search2.length > 3)
     
     return flights2.slice(0,0);

     // alert("No se encontro informacion de origen, debe ingresar tres letras en Mayuscula, Ejem: MZL");
     
    const filteredVuelos2 = flights2.filter( vuel => vuel.destination.includes( search2));

    return filteredVuelos2 ;

  

  }

  //Nota adicional: 
  //Se intento realizar un metodo que no permitia mas de tres letras o vacio
  //al implementarlo no arroja resultado

 
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