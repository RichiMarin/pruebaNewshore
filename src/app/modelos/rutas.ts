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

export interface Vuelos{

    origin: string;
    destination: string;
    flightCarrier:    string;
    flightNumber:     string;
    price: string;

}
