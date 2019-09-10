import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Sale } from '../pages/sale/model/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  getSales(): Observable<Sale[]> {
    return this.http.get<Array<Sale>>(environment.API_BASE + 'sales').pipe(
      map(
          (data:Array<Sale>) => this.saleTransform(data)
      )
    )
  } 

  getId(): Observable<number> {
    return this.http.get<number>(environment.API_BASE + 'sales/id').pipe(
      map(
          (data:number) => data[0]
      )
    )
  } 
  
  private saleTransform(data:Array<Sale>):Array<Sale>{
    let resp = new Array<Sale>();
    let ord : Sale;
    for(let i=0;i<data.length;i++){
      ord = {
        id:data[i].id,
        clientId:data[i].clientId,
        clientName:data[i].clientName,
        description:data[i].description,
        totalAmount:data[i].totalAmount,
        tmstmp:data[i].tmstmp
      };
      resp.push(ord);
    }
    return resp;
  }

  addSale(sale:Sale): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const body = {
      'clienteId':sale.clientId,
      'descripcion':sale.description,
      'montoTotal':sale.totalAmount
    }
    console.log(body)
    if(sale.id){
      return this.http.put<Sale>(environment.API_BASE + 'sales/' + sale.id,body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }else{
      console.log('llego al post <Sale>')
      return this.http.post<Sale>(environment.API_BASE + 'sales/',body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }
  }

  deleteSale(sale:Sale): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.delete<any>(environment.API_BASE + 'sales/' + sale.id , httpOptions).pipe(
      map(
          (data:any) => data
      )
    )
  }
}
