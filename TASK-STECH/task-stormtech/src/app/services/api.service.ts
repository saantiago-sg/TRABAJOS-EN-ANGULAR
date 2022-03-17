import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PassengerData, PassengerI } from '../models/passenger.interface';
import { PassengersI } from '../models/passengers.interface';
import { AirlineArreglo } from '../models/passenger.model';
import { AirlineI } from '../models/airline.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  urlPassenger = 'https://api.instantwebtools.net/v1/passenger';

  constructor( private http: HttpClient) { 
  }

  getQuery( query: string){
    const url = `https://api.instantwebtools.net/v1/${ query }`;
    const headers = new HttpHeaders();
    return this.http.get(url,{ headers });
  }

  getPassengers(page:number){
    let urlP = `https://api.instantwebtools.net/v1/passenger/?page=${ page }&size=10`;
    return this.http.get<PassengersI>(urlP).pipe(map ( (resp : PassengersI) => resp.data));
  }
  
  getPassenger( id: number){
    const urlpass = `https://api.instantwebtools.net/v1/passenger/${ id }`;
    return this.http.get<PassengerData>(urlpass).pipe(
      map( resp => {
        return resp
      }));
  }

  addPassenger(formPassengerNew: PassengerData):Observable<PassengerData>{
    let urlnew = this.urlPassenger;
    return this.http.post<PassengerData>(urlnew, formPassengerNew);
  }

  updatePassenger(id:number, formPassengerNew: PassengerData){
    const urlpass = `https://api.instantwebtools.net/v1/passenger/${ id }`;
    return this.http.put(urlpass, formPassengerNew);
  }
  
  deletePassenger(id: number){
    const urlpass = `https://api.instantwebtools.net/v1/passenger/${ id }`;
    return this.http.delete(urlpass);
  }

  getAirlines(){
    const urlAirline = 'https://api.instantwebtools.net/v1/airlines';
    return this.http.get<AirlineI>(urlAirline).pipe(map ( (resp: AirlineI) => resp))
  }
}