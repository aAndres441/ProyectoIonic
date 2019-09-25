import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { HoursEmployee } from '../pages/hours-employee/model/hours-employee.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HoursEmployeeService {

  constructor(private http: HttpClient) { }

  getHoursEmployees(): Observable<HoursEmployee[]> {
    return this.http.get<Array<HoursEmployee>>(environment.API_BASE + 'hoursEmployees').pipe(
      map(
          (data:Array<HoursEmployee>) => this.hoursEmployeeTransform(data)
      )
    )
  } 

  hoursEmployeeTransform(data:Array<HoursEmployee>):Array<HoursEmployee>{
    let prod : HoursEmployee;
    let resp = new Array<HoursEmployee>();
    data.forEach(
      (elem:any)=>{
        prod = {
          id:elem.id,
          employeeId:null,
          employeeName:elem.employeeName,
          date:elem.date,
          hoursWorked:elem.hoursWorked,
          amount:elem.amount
        }
        resp.push(elem);
      }
    )
    return resp;
  }

  getHoursEmployee(id : number): Observable<HoursEmployee> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get<HoursEmployee>(environment.API_BASE + 'hoursEmployees/'+id , httpOptions).pipe(
      map(
          (data:HoursEmployee) => data
      )
    )
  } 
  
  addHoursEmployee(prod:HoursEmployee): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const body = {
      'empleadoId':prod.employeeId,
      'fecha':prod.date,
      'horasTrabajadas':prod.hoursWorked,
      'importe':prod.amount,
    }
    if(prod.id){
      return this.http.put<HoursEmployee>(environment.API_BASE + 'hoursEmployees/' + prod.id,body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }else{
      return this.http.post<HoursEmployee>(environment.API_BASE + 'hoursEmployees',body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }
  }

  deleteHoursEmployee(prod:HoursEmployee): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.delete<any>(environment.API_BASE + 'hoursEmployees/' + prod.id , httpOptions).pipe(
      map(
          (data:any) => data
      )
    )
  }

}
