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
import { NewPassengerComponent } from './components/new-passenger/new-passenger.component';
import { FormsModule } from '@angular/forms';


// pagination
import { NgxPaginationModule } from 'ngx-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';


// forms reactive
import { ReactiveFormsModule } from '@angular/forms';
import { EditPassengerComponent } from './components/edit-passenger/edit-passenger.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    PassengersComponent,
    HomeComponent,
    PassengerComponent,
    LoadingComponent,
    NewPassengerComponent,
    EditPassengerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
