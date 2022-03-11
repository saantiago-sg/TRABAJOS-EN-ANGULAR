import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { PassengerData } from 'src/app/models/passenger.interface';


@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  loading: boolean = true;
  public page: number = 0;
  passengers: PassengerData[] = [];

  constructor(private apiService:ApiService, private router:Router) { 
  }

  ngOnInit(): void { 
    this.getPassengers();
  }
  
  getPassengers(){
    this.apiService.getPassengers(this.page).subscribe( resp => {
      this.passengers = resp;
      this.loading = false;
    });
  }

  showPassenger(persona:PassengerData){
    this.router.navigate( ['/passenger', persona._id] );
  }

  nextPage(){
    this.page++;
    this.apiService.getPassengers(this.page).subscribe( resp => {
      this.passengers = resp;
      this.loading = false;
    });
  }
  
  prevPage(){ 
    if( this.page > 0)
      this.page--;
      this.apiService.getPassengers(this.page).subscribe( resp => {
        this.passengers = resp;
        this.loading = false;
      });
  }
}
