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
import { Person } from '../pages/person/model/person.model';
>>>>>>> d9b60315e85dab1992c40a3a4e78fe442fbe3c0e
@Injectable({
  providedIn: 'root'
})
export class PersonService {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Array<Person>>(environment.API_BASE + 'persons').pipe(
      map(
          (data:Array<Person>) => this.personTransform(data)
      )
    )
  } 

  getPersonsType(type:string): Observable<Person[]> {
    switch(type) { 
      case "Empleado": { 
        return this.http.get<Array<Person>>(environment.API_BASE + 'employees').pipe(
          map(
              (data:Array<Person>) => this.personTransform(data)
          )
        )
      } 
      case "Cliente": { 
        return this.http.get<Array<Person>>(environment.API_BASE + 'clients').pipe(
          map(
              (data:Array<Person>) => this.personTransform(data)
          )
        )
      }
      case "Fletero": { 
        return this.http.get<Array<Person>>(environment.API_BASE + 'travelers').pipe(
          map(
              (data:Array<Person>) => this.personTransform(data)
          )
        )
      } default :{
        console.log("Sin tipo de persona!")
      }
    }
  } 
  
  personTransform(data:Array<Person>):Array<Person>{
    return data;
  }

  getPerson(id : number): Observable<Person> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get<Person>(environment.API_BASE + 'persons/'+id , httpOptions).pipe(
      map(
          (data:Person) => data
      )
    )
  } 
  
  addPerson(person:Person): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const body = {
      'id':person.id,
      'nombre':person.name,
      'apellido': person.lastname,
      'email': person.email,
      'direccion': person.direction,
      'telefono': person.cellphone,
    }
    
    if(person.id){
      return this.http.put<Person>(environment.API_BASE + 'persons/' + person.id,body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }else{
      return this.http.post<Person>(environment.API_BASE + 'persons',body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }
  }
  getId(): Observable<number> {
    return this.http.get<number>(environment.API_BASE + 'persons/id').pipe(
      map(
          (data:number) => data[0]
      )
    )
  } 
  addPersonType(person:Person): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const body = {
      'id':person.id
    }
    switch(person.personType) { 
      case "Empleado": { 
        return this.http.post<Person>(environment.API_BASE + 'employees',body,httpOptions).pipe(
          map(
              (data:any) => data
          )
        )
      } 
      case "Cliente": { 
        return this.http.post<Person>(environment.API_BASE + 'client',body,httpOptions).pipe(
          map(
              (data:any) => data
          )
        )
      }
      case "Fletero": { 
        return this.http.post<Person>(environment.API_BASE + 'traveler',body,httpOptions).pipe(
          map(
              (data:any) => data
          )
        )
      } default :{
        console.log("Sin tipo de persona!")
      }
   } 
  }
  
  deletePerson(prod:Person): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.delete<any>(environment.API_BASE + 'persons/' + prod.id , httpOptions).pipe(
      map(
          (data:any) => data
      )
    )
  }
>>>>>>> d9b60315e85dab1992c40a3a4e78fe442fbe3c0e
}
