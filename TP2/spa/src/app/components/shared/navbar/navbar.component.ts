import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor( private _router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  buscarHeroe( termino: string ){
      // console.log(termino); obtengo texto del input
      this._router.navigate(['/buscar', termino]);
  }
}
