import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Order } from '../pages/order/model/order.model';
import { OrderSerializer } from './serializer/order.serializer';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<OrderSerializer[]> {
    return this.http.get<Array<OrderSerializer>>(environment.API_BASE + 'orders').pipe(
      map(
          (data:Array<OrderSerializer>) => this.orderTransform(data)
      )
    )
  } 
  
  private orderTransform(data:Array<OrderSerializer>):Array<OrderSerializer>{
    let ordSerializer:OrderSerializer;
    let resp = new Array<OrderSerializer>();
    for(let i=0;i<data.length;i++){
      ordSerializer = {
        id:data[i].id,
        product: data[i].product,
        description:data[i].description,
        count:data[i].count,
        totalAmount:data[i].totalAmount,
        tmstmp:data[i].tmstmp
      }
      resp.push(ordSerializer);
    }
    return resp;
  }

  addOrder(order:Order): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const body = {
      'productoId':order.productId,
      'ventaId':order.saleId,
      'compraId':order.purchaseId,
      'descripcion':order.description,
      'cantidad':order.count,
      'montoTotal':order.totalAmount,
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
