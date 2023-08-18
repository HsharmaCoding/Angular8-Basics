import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  template: `
            <h1 style="text-align:center"> 
              Demo of ngSwitch - Directive
            </h1>
            <div [ngSwitch]="color">
              <div *ngSwitchCase="'red'">You picked red color</div>
              <div *ngSwitchCase="'green'">You picked green color</div>
              <div *ngSwitchCase="'blue'">You picked blue color</div>
              <div *ngSwitchDefault>Pick Again.</div>
            </div>
            `,
  styleUrls: ['./ng-switch-directive.component.css']
})
export class NgSwitchDirectiveComponent implements OnInit {

  public color="pink";
  constructor() { }

  ngOnInit() {
  }

}
