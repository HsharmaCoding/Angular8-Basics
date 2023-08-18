import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
            <h2> Demo of property binding </h2>
            <input [id]="myId" type="text" value="Hitesh Sharma">
            <input [disabled]="isDisabled" [id]="myId" type="text" value="Hitesh Sharma">

            <h3>Alternate syntax of property binding</h3>
            <input bind-id="myId" type="text" value="Hitesh Sharma">
            <input bind-disabled="isDisabled" bind-id="myId" type="text" value="Hitesh Sharma">
            `,
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  public myId="testId";
  public isDisabled=true;

  constructor() { }

  ngOnInit() {
  }

}
