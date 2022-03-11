import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { PassengerData, PassengerI } from '../models/passenger.interface';
import { PassengersI } from '../models/passengers.interface';

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

  getPassenger( id: string){
    const urlpass = `https://api.instantwebtools.net/v1/passenger/${ id }`;
    return this.http.get<PassengerData>(urlpass).pipe(
      map( resp => {
        return resp
      }));
    // return this.getQuery(`passenger/${ id }`);
}

  postPassenger(formPassengerNew:PassengerI):Observable<PassengerI>{
    let urlnew = this.urlPassenger;
    return this.http.post<PassengerI>(urlnew,formPassengerNew);
  }
}
