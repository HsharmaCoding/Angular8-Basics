import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
              {"id" :1,"name":"hitesh","age":30 },
              {"id" :2,"name":"mayank","age":40 },
              {"id" :3,"name":"sam","age":50 },
              {"id" :4,"name":"Jim","age":60 },
              {"id" :5,"name":"Kismat","age":70 }
           ];
  }
}
