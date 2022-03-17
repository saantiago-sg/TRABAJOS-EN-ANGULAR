import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassengerModel } from 'src/app/models/passenger.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit{
  
  passenger: PassengerModel = new PassengerModel();

  constructor( private activatedRoute: ActivatedRoute, private apiService: ApiService) {

    this.activatedRoute.params.subscribe( params => {
      this.getPassenger(params['id']);
  });    

  }

  ngOnInit(): void {
  }

  getPassenger(id:number){
    this.apiService.getPassenger(id).subscribe( resp => {
        this.passenger = resp;
    })
  }

}