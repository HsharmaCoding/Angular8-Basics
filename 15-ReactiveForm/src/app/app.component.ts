import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm=new FormGroup({
    userName:new FormControl('Hitesh'),
    password:new FormControl(''),
    confirmPassword:new FormControl('')
  });
}
