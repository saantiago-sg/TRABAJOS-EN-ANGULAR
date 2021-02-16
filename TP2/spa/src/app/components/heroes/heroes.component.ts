import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

    heroes: Heroe[] = [];

  // tslint:disable-next-line:variable-name
  constructor( private _heroesService: HeroesService,
               // tslint:disable-next-line:variable-name
               private _router: Router
    ) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  this.heroes = this._heroesService.getHeroes();
  }

  // tslint:disable-next-line:typedef
  verHeroe(index: number){
  this._router.navigate( ['/heroe', index] );
  }

}
