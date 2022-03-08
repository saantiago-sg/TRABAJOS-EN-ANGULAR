import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PassengerI } from 'src/app/models/passenger.interface';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-new-passenger',
  templateUrl: './new-passenger.component.html',
  styleUrls: ['./new-passenger.component.css']
})
export class NewPassengerComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({
      _id: new FormControl(''),
      name: new FormControl('', Validators.required),
      trips: new FormControl('', Validators.required),
      airline: new FormControl('', Validators.required),
    });
  }

  formPassengerNew: FormGroup;
  
  constructor( private fb: FormBuilder, private api: ApiService, private router: Router) {  
    this.formPassengerNew = this.createFormGroup();
  }
  
  ngOnInit(): void {
    let id = localStorage.getItem('token');
    this.formPassengerNew.patchValue({
      '_id': id
    });
  }

  save(formPassengerNew:PassengerI){
    console.log('ee'+ this.formPassengerNew);
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

