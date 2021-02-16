import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;

  mensajeError!: string;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServic) => {
      this.loading = false;
      this.error = true;
      console.log(errorServic);
      this.mensajeError = errorServic.error.error.message;
    });

  }


}
