import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code Circulation';
  //We will send this property to component-interaction component.
  public name="Hitesh";
  //This property will be used to capture the value which is coming fron child component.
  public message="";
}
