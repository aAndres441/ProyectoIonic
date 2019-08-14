import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Product } from '../pages/product/model/product.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Product[]> {
    return this.http.get<Array<Product>>(environment.API_BASE + 'products').pipe(
      map(
          (data:Array<Product>) => this.productTransform(data)
      )
    )
  } 
  productTransform(data:Array<Product>):Array<Product>{
    return data;
  }

  addProduct(prod:Product): Observable<any>{
    console.log('llego al post =>')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const body = {
      'nombre':prod.nombre,
      'imagen':'',
      'descripcion':prod.descripcion
    }
    if(prod.id){
      return this.http.put<Product>(environment.API_BASE + 'products/' + prod.id,body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }else{
      return this.http.post<Product>(environment.API_BASE + 'products',body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }
  }

  deleteProduct(prod:Product): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.delete<any>(environment.API_BASE + 'products/' + prod.id , httpOptions).pipe(
      map(
          (data:any) => data
      )
    )
  }

}
