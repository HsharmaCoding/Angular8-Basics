import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  template: `<h1 style="text-align:center"> 
              Demo of ngIf - Directive
            </h1>
            
            <h2>Conditionally Render HTML Content using ngIf. *ngIf always used with asterisk(*) sign.</h2>
            <h2>When we hide html using ngIf, then html content will be removed from DOM itself. But when we hide html using css then html conent will be in DOM but not showing to the page. Meaning someone can update the value in DOM from browser inspect element when we use css property to hide the values.</h2>
            <h2>Direct boolean value assignment with ngIf.</h2>
            <h2 *ngIf="true">
              => Code Circulation 
            </h2>

            <h2>Typescript property assignment with ngIf and toggle the conent conditionally.</h2>
            <h2 *ngIf="displayName">
              => Code Circulation
            </h2>

            <h2>Example of If and Else together. Else block always performed using ng-template container and refference variable.</h2>
            <h2 *ngIf="displayName; else elseBlock">
             => Code Circulation
            </h2>

            <ng-template #elseBlock>
              <h2> => Name is hidden</h2>
            </ng-template>

            <h2>Alternate way of execute If and Else.</h2>

            <div *ngIf="displayName; then thenBlock; else elseBlockk"></div>
            <ng-template #thenBlock>
              <h2> => then Block (If)</h2>
            </ng-template>

            <ng-template #elseBlockk>
              <h2> => else Block (Else)</h2>
            </ng-template>
            `,
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit {

  public displayName=true;
  constructor() { }

  ngOnInit() {
  }

}
