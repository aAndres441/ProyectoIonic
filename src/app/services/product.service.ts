import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../pages/product/model/product.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Array<Product>>(environment.API_BASE + 'products').pipe(
      map(
        (data: Array<Product>) => this.productTransform(data)
      )
    )
<<<<<<< HEAD
  }
  productTransform(data: Array<Product>): Array<Product> {
    return data;
=======
  } 

  productTransform(data:Array<Product>):Array<Product>{
    let prod : Product;
    let resp = new Array<Product>();
    data.forEach(
      (elem:any)=>{
        prod = {
          id:elem.id,
          name:elem.name,
          description:elem.description,
          tmstmp : elem.tmstmp
        }
        resp.push(elem);
      }
    )
    return resp;
  }

  getProduct(id : number): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get<Product>(environment.API_BASE + 'products/'+id , httpOptions).pipe(
      map(
          (data:Product) => data
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
>>>>>>> d9b60315e85dab1992c40a3a4e78fe442fbe3c0e
  }

}
