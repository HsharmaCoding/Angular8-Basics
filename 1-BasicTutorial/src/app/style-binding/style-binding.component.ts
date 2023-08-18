import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `<h1 style="text-align:center"> 
              Demo of style binding.
            </h1>
            <h2>Simple example.</h2>
            <h3 [style.color]="'orange'"> Style Binding 1 </h3>

            <h2>Conditionally assign value to the css property.</h2>
            <h3 [style.color]="hasError ? 'red' : 'green'"> Style Binding 2 </h3>

            <h2>Bind the property with the class.</h2>
            <h3 [style.color]="highlightColor"> Style Binding 3 </h3>

            <h2>Aapply multiple style using ngStyle directive.</h2>
            <h3 [ngStyle]="titleStyle"> Style Binding 4 </h3>
            `,
  styles: [``]
})
export class StyleBindingComponent implements OnInit {

  public hasError=true;
  public isSpecial=true;
  public highlightColor="blue"
  public titleStyle={
    color:"Chocolate",
    fontStyle:"italic"
  }

  constructor() { }

  ngOnInit() {
  }

}
