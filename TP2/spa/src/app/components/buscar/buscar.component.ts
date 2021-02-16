import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {

  heroes: any[] = [];
  // tslint:disable-next-line:variable-name
  // tslint:disable-next-line:variable-name
  termino!: string;

  // tslint:disable-next-line:variable-name
  constructor( private _activatedRoute: ActivatedRoute,
               // tslint:disable-next-line:variable-name
               private _heroesService: HeroesService,
    ) {

   }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe( params => {
    // tslint:disable-next-line:no-string-literal
    this.termino = params['termino'];
    console.log(this.heroes);
      // tslint:disable-next-line:no-string-literal
    this.heroes = this._heroesService.buscarHeroes( params['termino']);

    });


  }

}
