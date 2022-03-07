import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-passenger',
  templateUrl: './new-passenger.component.html',
  styleUrls: ['./new-passenger.component.css']
})
export class NewPassengerComponent implements OnInit {

  formPassengerNew: FormGroup;
  
  constructor( private fb: FormBuilder) {  
    this.formPassengerNew = this.fb.group({
      name: ['', Validators.required ],
      trips: ['', Validators.required ],
      airline: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  save(){
    console.log(this.formPassengerNew);

    if(this.formPassengerNew.invalid){
      Object.values(this.formPassengerNew.controls).forEach( control => {
        control.markAllAsTouched();
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

