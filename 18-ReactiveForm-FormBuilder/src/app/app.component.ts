import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb:FormBuilder){

  }
  registrationForm=this.fb.group({
    userName : ['Hitesh'],
    password : [''],
    confirmPassword : [''],
    address : this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  });
  // registrationForm=new FormGroup({
  //   userName:new FormControl('Hitesh'),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  //Here we have to set the value for all the fields. We can not leave any other fields without setting the values.
  LoadApiDataSetValue(){
    this.registrationForm.setValue({
      userName:'Bruce',
      password:'test',
      confirmPassword:'test',
      address:{
        city: 'City',
        state: 'State',
        postalCode: '123456'
      }
    })
  }

  //Using this method we can leave other fields blank
  LoadApiDataUsingPatchValue(){
    this.registrationForm.patchValue({
      userName:'Bruce',
      password:'test',
      confirmPassword:'test'
    })
  }
}
