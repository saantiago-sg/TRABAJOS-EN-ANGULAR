import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { PassengerData } from 'src/app/models/passenger.interface';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  loading: boolean = true;
  public page: number = 0;
  passengers: PassengerData[] = [];
  buttonDisabled: boolean = false;

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

  updatePassenger(persona:PassengerData){
    this.router.navigate( ['/passenger', persona._id] );
  }

  deletePassenger(passenger: PassengerData, position: number){
    Swal.fire({
      icon: 'question',
      title: '¿Do you want to remove '+ passenger.name+ ' from the passenger list?',
      showConfirmButton: true,
      showCancelButton: true,
    }).then(resp => {
      if(resp.value){
        this.passengers.splice(position, 1);
        this.apiService.deletePassenger(passenger._id).subscribe( resp => {
          this.loading = true;
          this.getPassengers();
        });
      }
    });
  }

  nextPage(size: number){
    if(this.page >= 0 && size > 0){
      this.page++;
      this.apiService.getPassengers(this.page).subscribe( resp => {
              this.passengers = resp;
              this.loading = false;
              if(size<= 0){
                this.buttonDisabled = true;
              }else{
                this.buttonDisabled = false;
              }
      });    
    }
    else{
      this.buttonDisabled = true;
    }
  }
  
  prevPage(){ 
    if( this.page > 0)
      this.page--;
      this.apiService.getPassengers(this.page).subscribe( resp => {
        this.passengers = resp;
        this.loading = false;
        this.buttonDisabled = false;
      });
  }
}