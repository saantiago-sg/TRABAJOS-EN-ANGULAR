import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
})
export class CardHeroeComponent implements OnInit {

  @Input() heroe: any = {};
  // input hace q algo pueda venir de afuera, en este caso seria heroe
  @Input() index: number;
  // tslint:disable-next-line:variable-name

  @Output() heroeSeleccionado: EventEmitter<number>;

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  verHeroe(){
    this._router.navigate( ['/heroe', this.index] );
    // this.heroeSeleccionado.emit( this.index );
    }

}
