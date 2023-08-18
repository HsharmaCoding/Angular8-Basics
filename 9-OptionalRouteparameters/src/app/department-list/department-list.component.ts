import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Router,ActivatedRoute,ParamMap}from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"ReactJs"},
    {"id":3,"name":"jQuery"},
    {"id":4,"name":"Laravel"},
    {"id":5,"name":"MongoDb"}
  ]
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.selectedId=id;
    });
  }
  onSelect(department){
    this.router.navigate(['/departments',department.id])
  }

  isSelected(department){
    return department.id===this.selectedId;
  }
}
