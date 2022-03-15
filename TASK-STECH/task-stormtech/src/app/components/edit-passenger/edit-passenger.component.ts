import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PassengerData, PassengerI } from 'src/app/models/passenger.interface';
import { PassengerModel } from 'src/app/models/passenger.model';
import { ApiService } from 'src/app/services/api.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-passenger',
  templateUrl: './edit-passenger.component.html',
  styleUrls: ['./edit-passenger.component.css']
})
export class EditPassengerComponent implements OnInit {

  formPassengerNew: FormGroup;
  passenger: PassengerModel = new PassengerModel();


  constructor(private api: ApiService, private fb: FormBuilder, private router: ActivatedRoute) {
    this.formPassengerNew = this.createFormGroup();
  }

  ngOnInit(): void {
    this.api.getPassenger( this.router.snapshot.params['id']).subscribe( ( result: PassengerData ) => {
      this.formPassengerNew = new FormGroup( {
        name: new FormControl( result['name'], [Validators.required]),
        trips: new FormControl( result['trips'], [Validators.required] ),
        airline: new FormControl( '', [Validators.required] ),
      } );
    } );
  }

  createFormGroup(){
    return this.fb.group({
      name: ['', [Validators.required]],
      trips: ['', {validators:[Validators.required]}],  // permite como si fueran opciones
      airline: ['', [Validators.required]],
    })
  }

  updateData(formPassengerNew:PassengerData) {
    if(this.formPassengerNew.invalid){
      Object.values(this.formPassengerNew.controls).forEach( control => {
        control.markAllAsTouched();
      })
    }else{
      Swal.fire({
        title: 'Please wait',
        text: 'Saving information',
        allowOutsideClick: false
      });
      Swal.showLoading();
      this.api.updatePassenger( this.router.snapshot.params['id'], formPassengerNew ).subscribe( ( result ) => {
        Swal.fire({
          icon: 'success',
          title: ' was added successfully',
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
