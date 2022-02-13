// import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NextMoviesComponent } from './components/next-movies/next-movies.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'next-movies', component: NextMoviesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BuscarComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
