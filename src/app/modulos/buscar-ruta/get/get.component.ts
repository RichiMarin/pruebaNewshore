import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models';
import { BuscarRutaService } from 'src/app/services/buscar-ruta.service';
import { Rutas } from '../../../models/rutas';



@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: []
})
export class GetComponent implements OnInit {

 
  public vuelos: Flight[] = []
  
  constructor( private buscarrutaService: BuscarRutaService ) { }
 
  ngOnInit(): void {


    //Llamada del servicio buscar-ruta service ts

    this.buscarrutaService.cargarVuelos()
      .subscribe( vuelos => {

        console.log(vuelos);
        this.vuelos = vuelos;
       
        

      });
    }
  }
   

  

  


