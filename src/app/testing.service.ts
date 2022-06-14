import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Employee } from './employee';

@Injectable()
export class TestingService {

  constructor(private h:HttpClient) { }


  private k: string = "/assets/data/employees.json";



  private handleError(error:any)
    {
      console.error(error);
      return throwError(error);
    }

  getData(): Observable<Employee[]>{
    return this.h.get<Employee[]>(this.k).pipe(
      tap(data=>console.log(data)),catchError(this.handleError)
    );
    
    
    
  }
 
  
}

