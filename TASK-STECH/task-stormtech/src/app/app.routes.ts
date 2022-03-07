import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { NewPassengerComponent } from './components/new-passenger/new-passenger.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'passengers', component: PassengersComponent },
    { path: 'passenger/:id', component: PassengerComponent },
    { path: 'new-passenger', component: NewPassengerComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);