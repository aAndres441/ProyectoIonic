import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {HttpClient } from '@angular/common/http';
import { Product } from '../pages/product/model/product.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
=======
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Sale } from '../pages/sale/model/sale.model';
>>>>>>> d9b60315e85dab1992c40a3a4e78fe442fbe3c0e

@Injectable({
  providedIn: 'root'
})
export class SaleService {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private http: HttpClient) { }

  getSales(): Observable<Sale[]> {
    return this.http.get<Array<Sale>>(environment.API_BASE + 'sales').pipe(
      map(
          (data:Array<Sale>) => this.saleTransform(data)
      )
    )
  } 

  getId(): Observable<number> {
    return this.http.get<number>(environment.API_BASE + 'sales/-').pipe(
      map(
          (data:number) => data
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
        'clientId':sale.clientId,
        'clientName':sale.clientName,
        'description':sale.description,
        'totalAmount':sale.totalAmount,
    }

    if(sale.id){
      return this.http.put<Sale>(environment.API_BASE + 'sales/' + sale.id,body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }else{
      return this.http.post<Sale>(environment.API_BASE + 'sales',body,httpOptions).pipe(
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
>>>>>>> d9b60315e85dab1992c40a3a4e78fe442fbe3c0e
}