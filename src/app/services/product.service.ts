import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
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

}
