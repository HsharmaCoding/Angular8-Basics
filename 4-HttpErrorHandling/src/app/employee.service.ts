import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient, HttpClientModule,HttpErrorResponse} from'@angular/common/http';
import { IEmployee } from './employee';
import { catchError, } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string="/assets/data/employees.json";

  constructor(private http:HttpClient) { }

   getEmployees():Observable<IEmployee[]>{
    //<IEmployee[]> it will cast the reponse into the employee array.
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(catchError(this.errorHandler), 
                          finalize(()=>{ 
                                          console.log("Example of finally block of code")
                                       }
                                   )
                         )              
                    
    }

    errorHandler(error:HttpErrorResponse)
    {
      return throwError(error.message || "server error.");
    }
}