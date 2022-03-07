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
  
  passengerComp: any = {};

  constructor( private activatedRoute: ActivatedRoute, private pasajeroService: ApiService) {
    
    this.activatedRoute.params.subscribe( params => {
      this.getPassenger(params['id']);
    });
  }

  ngOnInit(): void {
  }

  getPassenger(id:string){
    this.pasajeroService.getPassenger(id).subscribe( (passengerComp: any) => {
        console.log(passengerComp);
        this.passengerComp = passengerComp;
    })
  }

}
