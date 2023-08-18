import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
            <h1 style="text-align:center"> 
              Demo of Two Way Binding.
            </h1>

            <h2>ngModel directives is used for two way binding. It ensures view and model data always in sync. We nhave to import FormsModule in app.component.ts</h2>
            <input [(ngModel)]="name" type="text">
            {{name}}
            `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  public name="";
  constructor() { }

  ngOnInit() {
  }

}
