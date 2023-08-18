import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-referrence-variable',
  template: `<h1 style="text-align:center"> 
              Demo of Template Refference Variable.
            </h1>

            <h2>#myInput Template Refference Variable</h2>
            <input #myInput type="text">
            <button (click)="logMessage(myInput.value)">Log</button>
            {{txtControlVal}}
            `,
  styles: [``]
})
export class TemplateReferrenceVariableComponent implements OnInit {

  public txtControlVal="";
  constructor() { }

  ngOnInit() {
  }
  logMessage(value){
    console.log(value);
    this.txtControlVal=value;
  }
}
