import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    
    return this.http.get(url, {headers});
  }

  getPersonas(){
      return this.getQuery('passenger').pipe(map ( (resp : any) => resp['data']))
  //  return this.http.get(this.url,{ headers }).pipe( map( (resp: any) => {
  //     return resp['data'];
  //  }));
  }

  getPersona( id: string){
    return this.getQuery(`passenger/${ id }`);
    // .pipe(map ( (resp : any) => resp['data']))


//  return this.http.get(this.url,{ headers }).pipe( map( (resp: any) => {
//     return resp['data'];
//  }));
}

  
  
 
}
