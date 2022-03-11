import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PassengerI } from 'src/app/models/passenger.interface';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-new-passenger',
  templateUrl: './new-passenger.component.html',
  styleUrls: ['./new-passenger.component.css']
})
export class NewPassengerComponent implements OnInit {

  createFormGroup(){
    return this.fb.group({
      name: ['', [Validators.required]],
      trips: ['', {validators:[Validators.required]}],  // permite como si fueran opciones
      airline: ['', [Validators.required]],
    })
  }

  formPassengerNew: FormGroup;
  
  constructor( private api: ApiService, private fb: FormBuilder ) {  
    this.formPassengerNew = this.createFormGroup();
  }
  
  ngOnInit(): void {    
  }

  save(formPassengerNew:PassengerI){
      if(this.formPassengerNew.invalid){
        Object.values(this.formPassengerNew.controls).forEach( control => {
          control.markAllAsTouched();
        })
      }else{
        this.api.postPassenger(formPassengerNew).subscribe( data => {
          console.log(data);
          this.onResetForm();
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

  onResetForm(): void {
    this.formPassengerNew.reset();
  }
}

