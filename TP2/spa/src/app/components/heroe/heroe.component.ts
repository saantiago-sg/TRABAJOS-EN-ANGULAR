import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: any = {};

  // tslint:disable-next-line:variable-name
  constructor(private _activatedRoute: ActivatedRoute,
              // tslint:disable-next-line:variable-name
              private _heroesService: HeroesService
    ) {
        this._activatedRoute.params.subscribe( params => {
            // tslint:disable-next-line:no-string-literal
            this.heroe = this._heroesService.getHeroe( params['id'] );
        });
      }



}
