export interface Charter {
    id : number;
    travelerId : number;
    travelerName : string;
    date : Date;
    sourceAddress : string;
    destinationAddress : string;
    price:number;
    description : string;
    tmstmp: Date;
}
