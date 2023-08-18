import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  template: `

            <h1 style="text-align:center"> 
              Demo of ngFor.
            </h1>
            <br>

            <h2>Show data  from array.</h2>
            <div *ngFor="let color of colors">
              <h2>{{color}}</h2>
            </div>
            <br>

            <h2>Show data with index.</h2>
            <div *ngFor="let color of colors;index as i">
              <h2> {{i}} {{color}} </h2>
            </div>
            <br>

            <h2>Show data with first index value.</h2>
            <div *ngFor="let color of colors;first as f">
              <h2> {{f}} {{color}} </h2>
            </div>
            <br>

            <h2>Show data with last index value.</h2>
            <div *ngFor="let color of colors;last as l">
              <h2> {{l}} {{color}} </h2>
            </div>
            <br>

            <h2>Show data with odd values.</h2>
            <div *ngFor="let color of colors;odd as o">
              <h2> {{o}} {{color}} </h2>
            </div>
            <br>
            
            <h2>Show data with even values.</h2>
            <div *ngFor="let color of colors;even as e">
              <h2> {{e}} {{color}} </h2>
            </div>
            `,
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent implements OnInit {

  public colors=["red","green","blue","yellow"];
  constructor() { }

  ngOnInit() {
  }

}
