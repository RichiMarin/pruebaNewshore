//Creacion de la clase Rutas, se transformo la bd asignada y se creo un objecto JSON
//llamado Rutas

export interface Rutas {
    map: any;
    departureStation: string;
    arrivalStation:   string;
    flightCarrier:    string;
    flightNumber:     string;
    price:            string;
}

export enum FlightCarrier {
    Co = "CO",
    Es = "ES",
    MX = "MX",
}

//Exportamos un nuevo elemento llamado Vuelos el cual tomara los atributos de la interface JSON Rutas
//Asignandoles sus nombres como se muestra en el modelo (UML)
export interface Vuelos{

    origin: string;
    destination: string;
    flightCarrier:    string;
    flightNumber:     string;
    price: string;

}
