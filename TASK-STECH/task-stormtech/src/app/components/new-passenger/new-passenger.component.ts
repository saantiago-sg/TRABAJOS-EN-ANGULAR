import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AirlineI } from 'src/app/models/airline.interface';
import { PassengerData } from 'src/app/models/passenger.interface';
import { PassengerModel } from 'src/app/models/passenger.model';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-new-passenger',
  templateUrl: './new-passenger.component.html',
  styleUrls: ['./new-passenger.component.css']
})
export class NewPassengerComponent implements OnInit {

  formPassengerNew: FormGroup;
  passenger: PassengerModel = new PassengerModel();
  airlines: AirlineI[] = [];

  constructor( private api: ApiService, private fb: FormBuilder) {  
    this.formPassengerNew = this.createFormGroup();
  }
  
  ngOnInit(): void {    
    this.getAirlines();
  }

    getAirlines(){
      this.api.getAirlines().subscribe( (resp:any) => {
      this.airlines = resp;
        console.log(this.airlines);
      });
    }
  
  createFormGroup(){
    return this.fb.group({
      name: ['', [Validators.required]],
      trips: ['', {validators:[Validators.required]}],
      airline: ['', [Validators.required]],
    })
  }

  save(formPassengerNew:PassengerData){
    if(this.formPassengerNew.invalid){
      Object.values(this.formPassengerNew.controls).forEach( control => {
        control.markAllAsTouched();
      })
    }else{
      console.log(formPassengerNew);
      Swal.fire({
        title: 'Please wait',
        text: 'Saving information',
        allowOutsideClick: false
      });
      Swal.showLoading()
      this.api.addPassenger(formPassengerNew).subscribe( data => {
        console.log(data._id);
        Swal.fire({
          icon: 'success',
          title: data.name + ' was added successfully',
          showConfirmButton: false,
          footer: '<a class="btn button btn-primary" href="/passengers">Ok</a>'
        });
      })
    }
}


  get invalidName(){
    return this.formPassengerNew.get('name')?.invalid && this.formPassengerNew.get('name')?.touched;
  }
  get invalidTrip(){
    return this.formPassengerNew.get('trips')?.invalid && this.formPassengerNew.get('trips')?.touched;
  }
  get invalidAirline(){
    return this.formPassengerNew.get('airline')?.invalid && this.formPassengerNew.get('airline')?.touched;
  }
}

