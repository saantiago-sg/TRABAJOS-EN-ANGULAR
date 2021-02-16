import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];

  // tslint:disable-next-line:no-inferrable-types
  loading: boolean = false;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {

    this.router.params.subscribe( data => {
      // tslint:disable-next-line:no-string-literal
      this.getArtista(data['id']);
      // tslint:disable-next-line:no-string-literal
      this.getTopTracks(data['id']);
    });
  }

  // tslint:disable-next-line:typedef
  getArtista(id: string){
    this.loading = true;
    this.spotify.getArtista( id ).subscribe( data => {
      console.log(data);
      this.artista = data;
      this.loading = false;
    });
  }

  // tslint:disable-next-line:typedef
  getTopTracks(id: string){
    this.spotify.getTopTracks( id ).subscribe( data => {
      this.topTracks = data;
      console.log(this.topTracks);
    });
  }
}
