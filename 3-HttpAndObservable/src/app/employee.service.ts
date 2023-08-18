import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient, HttpClientModule} from'@angular/common/http';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string="/assets/data/employees.json";

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    //<IEmployee[]> it will cast the reponse into the employee array.
    return this.http.get<IEmployee[]>(this._url);
  }
}