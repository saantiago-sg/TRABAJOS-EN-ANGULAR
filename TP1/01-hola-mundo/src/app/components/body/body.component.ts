import { Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css'],  
})

export class BodyComponent{
    
    mostrar = true;

    frase: any = {
        mensaje : 'Yo me equivoque y pague, pero la pelota no se mancha. Se te escapa la tortuga.',
        autor: 'Diego Armando Maradona',
    };
    
    equipos : string[] = ['Argentino Juniors','Boca Juniors', 'Barcelona', 'Napoli', 'Sevilla', 'Newels'];
}