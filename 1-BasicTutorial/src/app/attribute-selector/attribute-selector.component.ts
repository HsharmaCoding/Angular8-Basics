import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-attribute-selector]',
  template: `<h1 style="text-align:center"> 
              Demo of attribute selector which can be used in any angular application
            </h1>`,
  styles: [`
              h1{
                  color: green;
                }
            `]
})
export class AttributeSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
