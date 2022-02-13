import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {


  personas: any[] = [];
  loading: boolean;
  public page: number | undefined;

  constructor(private apiService:ApiService, private router:Router) { 
    this.loading = true;


    this.apiService.getPersonas().subscribe( (resp:any) => {
      this.personas = resp;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

  showPassenger(persona:any){
    this.router.navigate( ['/passenger', persona._id] );
  }


   
}
