//  Clase Flight de nuesto modelo


export class Flight{
    static user: any;

    //Mapeo de la clase Flight se transforma en otro objecto llamado Object y se 
    // crea una instacina de la clase llamda Flight
      

    static flightdesdeJson( obj: Object ){
        //Objecto nuevo de la clase Flight
        return new Flight(
            'departureStation',
            'arrivalStation',
            'flightCarrier',
            'flightNumber',
            'price',           
        )
    }
    
    constructor(
        //Atributos de la clase Flight 
        public departureStation: string,
        public arrivalStation:   string,
        public flightCarrier:    string,
        public flightNumber:     string, 
        public price:            string,
    ){}

    // transformamos los atributos que registran entre {} asignandole el nuevo nombre
    // despues de la accion get; ejemplo nuevo : get origin, viene de departureStation
    get origin(){
        return `${ this.departureStation }`;
    }

    get destination(){
        return `${ this.arrivalStation }`;
    }

    get transport(){
        return `${ this.flightNumber } ${ this.flightCarrier }`;
    }


}