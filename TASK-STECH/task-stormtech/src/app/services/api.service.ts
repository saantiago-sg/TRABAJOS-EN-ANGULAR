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
  // getQuery( query: string){
  //   const url = `https://api.instantwebtools.net/v1/${ query }`;
  //   const headers = new HttpHeaders();
  //   const params = new HttpParams().set('page', '0').set('size', '10');
  //   return this.http.get(url,{ params, headers });
  // }
  getQuery( query: string){
    const url = `https://api.instantwebtools.net/v1/${ query }`;
    const headers = new HttpHeaders();
    // const params = new HttpParams().set('page', '0').set('size', '10');
    return this.http.get(url,{ headers });
  }

  getPersonas(page:number){
    // const params = new HttpParams().set('page', '0').set('size', '10');
    console.log('geeet' + page);
    return this.getQuery(`passenger/?page=${ page }&size=10`).pipe(map ( (resp : any) => resp['data']));

    // return this.getQuery('passenger', { params }).pipe(map ( (resp : any) => resp['data']));
  // aca va los params page y size
  }

  getPersona( id: string){
    return this.getQuery(`passenger/${ id }`);
}

  
  
 
}
