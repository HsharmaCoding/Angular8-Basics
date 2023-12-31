import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Router}from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"ReactJs"},
    {"id":3,"name":"jQuery"},
    {"id":4,"name":"Laravel"},
    {"id":5,"name":"MongoDb"}
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSelect(department){
    this.router.navigate(['/departments',department.id])
  }

}
