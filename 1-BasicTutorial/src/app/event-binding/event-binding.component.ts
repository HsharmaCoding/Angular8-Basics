import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
            <h1 style="text-align:center"> 
              Demo of Event binding.
            </h1>
            <h2>Simple event binding.</h2>
            <button (click)="greeting='welcome hitesh'">Greet</button>

            <h2>Attachd onClick event handler through function/method.</h2>
            <button (click)="onClick($event)">Greet</button>
            
            {{greeting}} {{eventType}}
            
            `,
  styles: [``]
})
export class EventBindingComponent implements OnInit {

  public greeting="";
  public eventType="";
  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log("Welcome to Code Circulation.")
    console.log(event)
    this.greeting="Welcome to Code Circulation"
    this.eventType=event.type;
  }

}
