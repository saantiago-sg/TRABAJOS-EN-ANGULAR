import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { HttpClientModule } from '@angular/common/http'; // importo para poder hacer peticiones http

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardComponent } from './components/shared/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { from } from 'rxjs';

// pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';



// importar rutas


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    CardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
