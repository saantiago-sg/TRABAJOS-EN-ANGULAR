import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// MAP
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getQuery(query: string){
     const url = `https://api.spotify.com/v1${ query }`;

     const headers = new HttpHeaders({
      // tslint:disable-next-line:object-literal-key-quotes
      'Authorization': 'Bearer BQBEyfuGqfvVZedjwEu4WdJ9zvcUIotwZOVOWv203Z-3Ds7IZZkJFMikx6hcwp-kQXe53tXDmPnTteC0SuM'
    });

    // tslint:disable-next-line:align
    return this.http.get(url, { headers });
    }

  // tslint:disable-next-line:typedef
  getNewReleases(){
  return this.getQuery('/browse/new-releases?limit=20').pipe( map( (data: any) => {
    return data.albums.items;
  }));
}

// tslint:disable-next-line:typedef
getArtistas( termino: string){
  return this.getQuery(`/search?q=${ termino }&type=artist&limit=15`).pipe( map( (data: any) => {
    return data.artists.items;
  }));
}

// tslint:disable-next-line:typedef
getArtista( id: string){
  return this.getQuery(`/artists/${ id }`);
    // return data.artists.items;
}

// tslint:disable-next-line:typedef
getTopTracks( id: string){
  return this.getQuery(`/artists/${ id }/top-tracks?country=us`).pipe( map( (data: any) => {
    // tslint:disable-next-line:no-string-literal
    return data['tracks'];
  }));
}

}
