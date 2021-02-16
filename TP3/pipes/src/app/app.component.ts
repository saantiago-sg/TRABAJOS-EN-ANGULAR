import { Component } from '@angular/core';
// import { resolve } from 'dns';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     // tslint:disable-next-line:no-inferrable-types
     nombre: string = 'Lisandro';

     // tslint:disable-next-line:no-inferrable-types
     nombreDos: string = 'SaNtiAgO aLBerTo gaUna';

     arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

     PI: number = Math.PI;

     // tslint:disable-next-line:no-inferrable-types
     porcentaje: number = 0.234;

     // tslint:disable-next-line:no-inferrable-types
     salario: number = 1234.5;

     equipos = {
       nombre : 'Racing',
       division : 'Primera',
       titulos : 32,
       direccion : {
         calle : 'avellaneda',
         numero : 22,
       }
     };

     // tslint:disable-next-line:no-shadowed-variable
     valorPromesa = new Promise<string>( (resolve) => {

      setTimeout(() => {
      resolve('llego la data');
      }, 4500);

     });

     fecha: Date = new Date();

     idioma!: string;

     // tslint:disable-next-line:no-inferrable-types
     videoUrl: string = 'https://www.youtube.com/embed/HATW-_xOwdg';

     // tslint:disable-next-line:no-inferrable-types
     activar: boolean = true;
}


