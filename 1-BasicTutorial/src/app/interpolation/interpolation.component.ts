import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `<h1 style="text-align:center"> 
              Demo of Interpolation - {{name}}
             </h1>
             
             <h1>Sum of 2+2={{2+2}}</h1>

             <h2>{{"Welcome " + name}}</h2>
             <h2>Length of {{name }}  is {{name.length}}</h2>

             <h2>{{name.toUpperCase()}} </h2>

             <h2>{{greetingUser()}}</h2>

             <h2>Assignments are not possible within interpolation</h2>
             <h2>We can not directly access the global javascript variable within the interpolation. However if it is required to use then we have to dclare the property with javascript global variable  then we can use the same property inside the interpolation</h2>

             <h2>{{siteUrl}}</h2>
             `,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public name="Code Circulation"
  public siteUrl=window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greetingUser(){
    return "Hello " + this.name;
  }

}
