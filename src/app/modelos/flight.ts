
export class Flight{
    static user: any;

    static flightdesdeJson( obj: Object ){
        return new Flight(
            'departureStation',
            'arrivalStation',
            'flightCarrier',
            'flightNumber',
            'price',           
        )
    }
    
    constructor(
        public departureStation: string,
        public arrivalStation:   string,
        public flightCarrier:    string,
        public flightNumber:     string, 
        public price:            string,
    ){}

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