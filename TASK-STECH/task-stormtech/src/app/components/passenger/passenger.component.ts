import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PassengersComponent } from '../passengers/passengers.component';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit{
  
  pasajero: any = {};

  constructor( private activatedRoute: ActivatedRoute, private pasajeroService: ApiService) {
    
    this.activatedRoute.params.subscribe( params => {
      this.getPersona(params['id']);
    });
  }

  ngOnInit(): void {
  }

  getPersona(id:string){
    this.pasajeroService.getPersona(id).subscribe( (pasajero: any) => {
        console.log(pasajero);
        this.pasajero = pasajero;
    })
  }

}
