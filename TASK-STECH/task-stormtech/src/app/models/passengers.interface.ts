import { PassengerData } from "./passenger.interface";

export interface PassengersI{ 
    totalPassengers: number,
    totalPages: number,
    data: PassengerData[],
}
