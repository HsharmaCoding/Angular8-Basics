import { Component } from '@angular/core';
import { from } from 'rxjs';
import { User } from './user';
import {EnrollmentService} from './enrollment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','React','Bootsrtap'];
  topicHasError=true;

  userModel=new User('Rob','hitesh@test.com',1234567891,'default',' ',true);

  constructor(private _enrollmentService:EnrollmentService){

  }

  validateTopic(value){
    if(value==='default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }

  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data=>console.log('Success!')
    )
  }
}
