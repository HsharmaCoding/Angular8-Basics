import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormArray } from '@angular/forms';
import { from } from 'rxjs';
import {FormBuilder,Validators} from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registrationForm:FormGroup;

  get email(){
    return this.registrationForm.get('email');
  }
  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb:FormBuilder){

  }
  ngOnInit(){

   this.registrationForm=this.fb.group({
      userName : ['',[Validators.required,Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email:[''],
      subscribe:[false],
      password : [''],
      confirmPassword : [''],
      address : this.fb.group({
        city:[''],
        state:[''],
        postalCode:['']
      }),
      alternateEmails:this.fb.array([])
    },{validator:PasswordValidator});

    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue=>{
        const email=this.registrationForm.get('email');
        if(checkedValue){
          email.setValidators(Validators.required);
        }else{
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });

  }


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
