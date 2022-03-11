export interface PassengerI{ 
    name: string,
    trips: number,
    airline: number,
}

import { AirlineI } from "./airline.interface";

export interface PassengerData{
    _id: number,
    name: string,
    trips: number,
    airline: AirlineI[],
}