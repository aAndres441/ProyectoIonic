import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Order } from '../pages/order/model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Array<Order>>(environment.API_BASE + 'orders').pipe(
      map(
          (data:Array<Order>) => this.orderTransform(data)
      )
    )
  } 
  private orderTransform(data:Array<Order>):Array<Order>{
    return data;
  }

  addOrder(order:Order): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const body = {
      'productoId':order.productoId,
      'ventaId':order.ventaId,
      'compraId':order.compraId,
      'descripcion':order.descripcion,
      'cantidad':order.cantidad,
      'montoTotal':order.montoTotal,
    }

    if(order.id){
      return this.http.put<Order>(environment.API_BASE + 'orders/' + order.id,body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }else{
      return this.http.post<Order>(environment.API_BASE + 'orders',body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }
  }

  deleteOrder(order:Order): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.delete<any>(environment.API_BASE + 'orders/' + order.id , httpOptions).pipe(
      map(
          (data:any) => data
      )
    )
  }
}
