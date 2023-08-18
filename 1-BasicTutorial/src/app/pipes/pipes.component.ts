import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
            <h1 style="text-align:center"> 
              Demo of PIPE. 
            </h1>
            <h2>Pipe is used to transform the data, before displayed to user.</h2>
            <h3>{{ name  }}</h3>

            <h2>Lower case Pipe</h2>
            <h3>{{ name | lowercase }}</h3>

            <h2>Upper case Pipe</h2>
            <h3>{{ name | uppercase }}</h3>

            <h2>Title case Pipe</h2>
            <h3>{{ message | titlecase }}</h3>

            <h2>slice:3 (It will display string value from 3rd index)</h2>
            <h3>{{ name | slice:3 }}</h3>

            <h2>slice:3:5 (It will display string value from 3rd to 5th, but not including 5th letter)</h2>
            <h3>{{ name | slice:3:5 }}</h3>

            <h2>slice:3 (It will display string value from 3rd index)</h2>
            <h3>{{ person | json }}</h3>

            <h2>Number pipe</h2>
            <h3>{{5.678 | number:'1.2-3'}}</h3>
            <h3>{{5.678 | number:'3.4-5'}}</h3>
            <h3>{{5.678 | number:'3.1-2'}}</h3>

            <h2>Percent</h2>
            <h2>{{0.25|percent}}</h2>

            <h2>Currency</h2>
            <h2>{{0.25|currency}}</h2>

            <h2>{{0.25|currency : 'GBP':'code' }}</h2>

            <h2>{{0.25|currency : 'EURO':'code' }}</h2>

            <h2>Date</h2>
            <h3>{{date}}</h3>
            <h3>{{date | date:'short'}}</h3>
            <h3>{{date | date:'shortDate'}}</h3>
            <h3>{{date | date:'shortTime'}}</h3>

            `,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name="Code Circulation";
  public message="Welcome to Code Circulation";
  public person ={
    "firstName":"John",
    "lastName":"Doe"
  }
  public date=new Date();

  constructor() { }

  ngOnInit() {
  }

}
