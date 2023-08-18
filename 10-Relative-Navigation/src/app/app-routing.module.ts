import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component'
import { EmployeeComponent } from './employee/employee.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  //Set default ROUTE when browser's FULL URL is empty.
  // {path:'', redirectTo:'/departments',pathMatch:'full'},
  //Commented existing navigation and  Updated to make use of relative navigation.
  {path:'', redirectTo:'/department-list',pathMatch:'full'},

  //Commented existing navigation and  Updated to make use of relative navigation.
  // {path:'departments', component:DepartmentListComponent},
  {path:'department-list', component:DepartmentListComponent},

  //Commented existing navigation and  Updated to make use of relative navigation.
  // {path:'departments/:id', component:DepartmentDetailComponent},
  {path:'department-list/:id', component:DepartmentDetailComponent},

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
                                 DepartmentDetailComponent]