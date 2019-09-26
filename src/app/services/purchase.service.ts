import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Purchase } from '../pages/purchase/model/purchase.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  getPurchases(): Observable<Purchase[]> {
    return this.http.get<Array<Purchase>>(environment.API_BASE + 'purchases').pipe(
      map(
          (data:Array<Purchase>) => this.purchaseTransform(data)
      )
    )
  } 

  getId(): Observable<number> {
    return this.http.get<number>(environment.API_BASE + 'purchases/id').pipe(
      map(
          (data:number) => data[0]
      )
    )
  } 
  
  private purchaseTransform(data:Array<Purchase>):Array<Purchase>{
    let resp = new Array<Purchase>();
    let purchase : Purchase;
    for(let i=0;i<data.length;i++){
      purchase = {
        id:data[i].id,
        clientId:data[i].clientId,
        clientName:data[i].clientName,
        description:data[i].description,
        totalAmount:data[i].totalAmount,
        tmstmp:data[i].tmstmp
      };
      resp.push(purchase);
    }
    return resp;
  }

  addPurchase(purchase:Purchase): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const body = {
      'clienteId':purchase.clientId,
      'descripcion':purchase.description,
      'montoTotal':purchase.totalAmount
    }
    if(purchase.id){
      return this.http.put<Purchase>(environment.API_BASE + 'purchases/' + purchase.id,body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }else{
      return this.http.post<Purchase>(environment.API_BASE + 'purchases/',body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }
  }

  deletePurchase(purchase:Purchase): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.delete<any>(environment.API_BASE + 'purchases/' + purchase.id , httpOptions).pipe(
      map(
          (data:any) => data
      )
    )
  }
}
