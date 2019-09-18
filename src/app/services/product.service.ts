import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError, tap } from 'rxjs/operators';
import { Product } from '../pages/product/model/product.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }
 
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.API_BASE + 'products').pipe(
      map(
          (data: Product[]) => {
          return this.productTransform(data);
        }
      )
    );
  } 

  productTransform(data: Array<Product>): Array<Product> {
    let prod: Product;
    const resp = new Array<Product>();
    data.forEach(
      (elem: any) => {
        prod = {
          id: elem.id,
          name: elem.name,
          description: elem.description,
          tmstmp: elem.tmstmp
        }
        resp.push(elem);
      }
    );
    return resp;
  }

  getProduct(id : number): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get<Product>(environment.API_BASE + 'products/' + id , httpOptions).pipe(
      map(
          (data: Product) => data
      )
    )
  } 
  
  addProduct(prod:Product): Observable<any>{
    console.log('llego al post =>')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const body = {
      'nombre':prod.name,
      'descripcion':prod.description
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
