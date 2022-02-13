import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// rutas
import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app.routes';


// components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengerComponent } from './components/passenger/passenger.component';
import { LoadingComponent } from './components/loading/loading.component';

// pagination
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    PassengersComponent,
    HomeComponent,
    PassengerComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
