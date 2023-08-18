import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
            <h1 style="text-align:center"> 
              Demo of component interaction using @Input() and @Output() decorator.
            </h1>
            <h2>{{"Hello " + parentData}}</h2>
            <h2> {{displayName}} </h2>

            <button (click)="fireEvent()">Send Event</button>
            `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  //parentData property name should be the same which is coming from the parent component.
   @Input() public parentData;
  //Sometimes we need to have different property name which is dclared on parent component. For that we need to use below code.
  //@Input('parentData') public displayName;

   @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Hi This Is Hitesh Sharma.');
  }
}
