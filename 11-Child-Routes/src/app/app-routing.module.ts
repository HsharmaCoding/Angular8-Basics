import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component'
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeComponent } from './employee/employee.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  //Set default ROUTE when browser's FULL URL is empty.
  {path:'', redirectTo:'/departments',pathMatch:'full'},
  {path:'departments', component:DepartmentListComponent},
  {
    path:'departments/:id', 
    component:DepartmentDetailComponent,
    children:[
      {path:'overview',component:DepartmentOverviewComponent},
      {path:'contact',component:DepartmentContactComponent}
    ]
  },
  {path:'employees', component:EmployeeComponent},
  //Wild Card Route should allways be the last routes from configuraton.
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DepartmentListComponent,
                                 EmployeeComponent,
                                 PageNotFoundComponent,
                                 DepartmentDetailComponent,
                                 DepartmentOverviewComponent,
                                 DepartmentContactComponent]