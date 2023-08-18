import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
     You selected department with ID : {{departmentId}}
    </h3>

    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    //Snap shot approach has drowback. After clicking on next button you will observe URL will be updated but the value in department list will not be updated.
    //To over come this issue we will use (param map observable)
    // let id =parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId=id;

    // this.route.paramMap.subscribe((params: ParamMap)=>{
    //   let id=parseInt(params.get('id'));
    //   this.departmentId=id;
    // });
    
  }
  goPrevious(){

    let previousId=this.departmentId-1;
    this.router.navigate(['/departments',previousId])

  }
  goNext(){
    let nextId=this.departmentId + 1;
    this.router.navigate(['/departments',nextId])
  }
}
