import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: ` <h1 style="text-align:center"> 
                Demo of class binding.
              </h1>
            <h2>Regular way to apply the class (without class binding).</h2>
            <h3 class="text-success"> Code Circulation </h3>

            <h2>Simple way of class binding.</h2>
            <h3 [class]="successClass" class="text-success"> Code Circulation </h3>

            <h2>Conditionaly apply the single class.</h2>
            <h3 [class.text-danger]="hasError" class="text-success"> Code Circulation </h3>

            <h2>Conditionaly apply the multiple classes using ngClass directives. ngClass directive is a collection of HTML Attribute.</h2>
            <h3 [ngClass]="messageClasses" class="text-success"> Code Circulation </h3>
              
            `,
            


  styles: [`
          .text-success{
            color: green;
          }
          .text-danger{
            color:red;
          }
          .text-special{
            font-style:italic;
          }
        `]
})
export class ClassBindingComponent implements OnInit {

  public successClass="text-success";
  public hasError =true;
  public isSpecial=true;
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
