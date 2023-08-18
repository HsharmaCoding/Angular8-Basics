import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
     You selected department with ID : {{departmentId}}
    </h3>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()">Previous </button>
      <button (click)="goNext()">Next </button>
    </p>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
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

    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.departmentId=id;
    });
    
  }
  goPrevious(){

    let previousId=this.departmentId-1;
    this.router.navigate(['/departments',previousId])

  }
  goNext(){
    let nextId=this.departmentId + 1;
    this.router.navigate(['/departments',nextId])
  }
  gotoDepartments(){
    let selectedId=this.departmentId ? this.departmentId : null;
    //Absolute path.
    //this.router.navigate(['/departments',{id:selectedId}]);

    //Use Relative Navigation.
    //It means I don't care what is the URL, but through current route it will append the department Id.
    //Specify the path [../] it means go back one sagment in the URL.
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route})
  }
  showContact(){
    //Navigate to contact path relative to current path.
    this.router.navigate(['contact'],{relativeTo:this.route})
  }
}
