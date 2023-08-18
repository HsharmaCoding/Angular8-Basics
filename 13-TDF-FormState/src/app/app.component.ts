import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','React','Bootsrtap'];

  userModel=new User('Rob','hitesh@test.com',1234567891,'','morning',true);
}
