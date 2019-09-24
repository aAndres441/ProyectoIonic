import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Charter } from '../pages/charter/model/charter.model';

@Injectable({
  providedIn: 'root'
})
export class CharterService {

  constructor(private http: HttpClient) { }

  getCharters(travelId:number): Observable<Charter[]> {
    return this.http.get<Charter[]>(environment.API_BASE + 'charters/' + travelId).pipe(
      map(
          (data:Array<Charter>) => this.charterTransform(data)
      )
    ) 
  }

  private charterTransform(data: Array<Charter>): Array<Charter> {
    let charter: Charter;
    let resp = new Array<Charter>();
    for (let i = 0; i < data.length; i++) {
      charter = {
        id: data[i].id,
        travelerId : data[i].travelerId,
        travelerName: data[i].travelerName,
        date :data[i].date,
        sourceAddress : data[i].sourceAddress,
        destinationAddress : data[i].destinationAddress,
        price:data[i].price,
        description : data[i].description,
        tmstmp: data[i].tmstmp
      }
      resp.push(charter);
    }
    return resp;
  }
  
  addCharter(charter: Charter): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      'travelerId': charter.travelerId,
      'date':charter.date,
      'sourceAddress': charter.sourceAddress,
      'destinationAddress': charter.destinationAddress,
      'price': charter.price,
      'description': charter.description
    }

    if (charter.id) {
      return this.http.put<Charter>(environment.API_BASE + 'charters/' + charter.id, body, httpOptions).pipe(
        map(
          (data: any) => data
        )
      )
    } else {
      return this.http.post<Charter>(environment.API_BASE + 'charters', body, httpOptions).pipe(
        map(
          (data: any) => data
        )
      )
    }
  }

  deleteCharter(charter: Charter): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.delete<any>(environment.API_BASE + 'charters/' + charter.id, httpOptions).pipe(
      map(
        (data: any) => data
      )
    )
  }
}
