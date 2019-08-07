import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Product } from '../pages/product/model/product.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
}
