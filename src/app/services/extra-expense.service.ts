import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { ExtraExpense } from '../pages/extra-expenses/model/extra-expense.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExtraExpenseService {

  constructor(private http: HttpClient) { }

  getExtraExpenses(): Observable<ExtraExpense[]> {
    return this.http.get<Array<ExtraExpense>>(environment.API_BASE + 'extraExpenses').pipe(
      map(
          (data:Array<ExtraExpense>) => this.extraExpenseTransform(data)
      )
    )
  } 

  extraExpenseTransform(data:Array<ExtraExpense>):Array<ExtraExpense>{
    let extExp : ExtraExpense;
    let resp = new Array<ExtraExpense>();
    data.forEach(
      (elem:any)=>{
        extExp = {
          id:elem.id,
          description:elem.description,
          price:elem.price,
          tmstmp : elem.tmstmp
        }
        resp.push(elem);
      }
    )
    return resp;
  }

  getExtraExpense(id : number): Observable<ExtraExpense> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get<ExtraExpense>(environment.API_BASE + 'extraExpenses/'+id , httpOptions).pipe(
      map(
          (data:ExtraExpense) => data
      )
    )
  } 
  
  addExtraExpense(extExp:any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const body = {
      'descripcion':extExp.description,
      'monto':extExp.price
    }
    if(extExp.id){
      return this.http.put<ExtraExpense>(environment.API_BASE + 'extraExpenses/' + extExp.id,body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }else{
      return this.http.post<ExtraExpense>(environment.API_BASE + 'extraExpenses',body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }
  }

  deleteExtraExpense(extExp:ExtraExpense): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.delete<any>(environment.API_BASE + 'extraExpenses/' + extExp.id , httpOptions).pipe(
      map(
          (data:any) => data
      )
    )
  }

}
