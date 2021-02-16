import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas: any[] = [];
  // tslint:disable-next-line:no-inferrable-types
  loading: boolean = false;
  error: boolean;
  mensajeError!: string;

  constructor(private spotify: SpotifyService) {
    this.error = false;
   }

  // tslint:disable-next-line:typedef
  buscarArtista(termino: string){
    this.loading = true;
    this.spotify.getArtistas(termino).subscribe( (data: any) => {
    this.artistas = data;
    this.loading = false;
    }, (errorService) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorService.error.error.message;
      console.log(errorService);
    });
  }

}
