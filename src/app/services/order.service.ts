import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Order } from '../pages/order/model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(saleId:number): Observable<Order[]> {
    return this.http.get<Order[]>(environment.API_BASE + 'orders/' + saleId).pipe(
      map(
          (data:Array<Order>) => this.orderTransform(data)
      )
    ) 
  }

  private orderTransform(data: Array<Order>): Array<Order> {
    let ordSerializer: Order;
    let resp = new Array<Order>();
    for (let i = 0; i < data.length; i++) {
      ordSerializer = {
        id: data[i].id,
        productId: null,
        productName: data[i].productName,
        purchaseId: null,
        saleId: null,
        description: data[i].description,
        count: data[i].count,
        unitPrice:data[i].unitPrice,
        totalAmount: data[i].totalAmount,
        tmstmp: data[i].tmstmp
      }
      resp.push(ordSerializer);
    }
    return resp;
  }
  
  addOrder(order: Order): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      'productoId': order.productId,
      'ventaId': order.saleId,
      'descripcion': order.description,
      'cantidad': order.count,
      'precioUnitario':order.unitPrice,
      'montoTotal': order.totalAmount,
    }

    if (order.id) {
      return this.http.put<Order>(environment.API_BASE + 'orders/' + order.id, body, httpOptions).pipe(
        map(
          (data: any) => data
        )
      )
    } else {
      return this.http.post<Order>(environment.API_BASE + 'orders', body, httpOptions).pipe(
        map(
          (data: any) => data
        )
      )
    }
  }

  deleteOrder(order: Order): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.delete<any>(environment.API_BASE + 'orders/' + order.id, httpOptions).pipe(
      map(
        (data: any) => data
      )
    )
  }
}
