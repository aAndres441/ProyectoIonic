import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Person } from '../pages/person/model/person.model';


@Injectable({
  providedIn: 'root'
})

export class PersonService {

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Array<Person>>(environment.API_BASE + 'persons').pipe(
      map(
        (data: Array<Person>) => this.personTransform(data)
      )
    )
  }

  personTransform(data: Array<Person>): Array<Person> {
    let per: Person;
    const resp = new Array<Person>();
    data.forEach(
      (elem: any) => {
        per = {
          id: elem.number,
          name: elem.string,
          lastName: elem.string,
          documentNumber: elem.number,
          email: elem.string,
          address: elem.string,
          telephone: elem.string,
          available: elem.boolean,
          tmstmp: elem.string,
        };
        resp.push(elem);
      }
    )
    return resp;
  }

  getPerson(id: number): Observable<Person> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<Person>(environment.API_BASE + 'persons/' + id, httpOptions).pipe(
      map(
        (data: Person) => data
      )
    )
  }

  addPerson(person: Person): Observable<any> {
    console.log('llego al post =>')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      /* 'id':person.id, */
      'name': person.name,
      'lastName': person.lastName,
      'documentNumber': person.documentNumber,
      'email': person.email,
      'address': person.address,
      'telephone': person.telephone,
      'available': person.available,
      'tmstmp': person.tmstmp,
    }
    if (person.id) {
      return this.http.put<Person>(environment.API_BASE + 'persons/' + person.id, body, httpOptions).pipe(
        map(
          (data: any) => data
        )
      );
    } else {
      return this.http.post<Person>(environment.API_BASE + 'persons', body, httpOptions).pipe(
        map(
          (data: any) => data
        )
      );
    }
  }

  deletePerson(prod: Person): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.delete<any>(environment.API_BASE + 'persons/' + prod.id, httpOptions).pipe(
      map(
        (data: any) => data
      )
    );
  }
}
