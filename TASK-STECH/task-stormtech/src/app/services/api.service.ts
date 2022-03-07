import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  // url = 'https://api.instantwebtools.net/v1/passenger';

  constructor( private http: HttpClient) { 
    console.log("service api")
  }

  getQuery( query: string){
    const url = `https://api.instantwebtools.net/v1/${ query }`;
    const headers = new HttpHeaders();
    return this.http.get(url,{ headers });
  }

  getPassengers(page:number){
    console.log('geeet' + page);
    return this.getQuery(`passenger/?page=${ page }&size=10`).pipe(map ( (resp : any) => resp['data']));
  }

  getPassenger( id: string){
    return this.getQuery(`passenger/${ id }`);
}
}
