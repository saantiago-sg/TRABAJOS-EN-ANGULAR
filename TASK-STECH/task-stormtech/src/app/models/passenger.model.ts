import { AirlineI } from "./airline.interface";

export class AirlineArreglo {
    id?: number;
    name?: string;
    country?: string;
    logo?: string;
    slogan?: string;
    head_quaters?: string;
    website?: string;
    established?: string;
}

export class PassengerModel{
    _id?:number;
    name?: string;
    trips?: number;
    airline?: AirlineArreglo[];
}

