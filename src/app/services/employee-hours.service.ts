import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

import { EmployeeHours } from '../pages/employee-hours/model/employee-hours';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHoursService {

  constructor(private http: HttpClient) { }

public getHoursPersons(): Observable<EmployeeHours[]> {
  
  return this.http.get<EmployeeHours[]>(environment.API_BASE + 'persons').pipe(
    map(
      (data: Array<EmployeeHours>) => this.personTransform(data)
    )
  )
}

  personTransform(data: Array<EmployeeHours>): Array<EmployeeHours> {
    let hours: EmployeeHours;
    const resp = new Array<EmployeeHours>();
    data.forEach(
      (elem: any) => {
        hours = {
          employeeId: elem.employeeId,
          date: elem.date,
          hoursWorked: elem.hoursWorked,
          totalAmount: elem.totalAmount,
          tmstmp: elem.tmstmp,

        };
        resp.push(elem);
      }
    );
    return resp;
  }

getPerson(id: number): Observable<EmployeeHours> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.get<EmployeeHours>(environment.API_BASE + 'persons/' + id, httpOptions).pipe(
    map(
      (data: EmployeeHours) => data
    )
  )
}

addEmpHours(employeeHours: EmployeeHours): Observable<any> {
  console.log('llego al post =>')
  return null;
}

deleteEmpHours(employeeHours: EmployeeHours): Observable<any> {
  console.log('llego al post =>');
  return null;
}
}
