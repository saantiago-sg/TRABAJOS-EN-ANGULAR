import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  passengers: any[] = [];
  loading: boolean = true;
  public page: number = 0;

  constructor(private apiService:ApiService, private router:Router) { 
   this.getPassengersGlobal();   
  }

  ngOnInit(): void {
  }

  getPassengersGlobal(){
    this.loading = true;
    this.apiService.getPassengers(this.page).subscribe( (resp:any) => {
      this.passengers = resp;
      this.loading = false;
      console.log(resp);
    });
  }

  showPassenger(persona:any){
    this.router.navigate( ['/passenger', persona._id] );
  }

  nextPage(){
    this.page++;
    this.apiService.getPassengers(this.page).subscribe( (resp:any) => {
      this.passengers = resp;
      this.loading = false;
    });
  }
  
  prevPage(){ 
    if( this.page > 0)
      this.page--;
      this.apiService.getPassengers(this.page).subscribe( (resp:any) => {
        this.passengers = resp;
        this.loading = false;
      });
  }
}
