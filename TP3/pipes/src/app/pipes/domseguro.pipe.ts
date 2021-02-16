import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // ayuda a prevenir errores de url

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  // tslint:disable-next-line:variable-name
  constructor(private _domSanitizer: DomSanitizer){

  }

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
