import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Travel } from '../pages/travel/model/travel.model';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private http: HttpClient) { }

  getTravels(): Observable<Travel[]> {
    return this.http.get<Array<Travel>>(environment.API_BASE + 'travels').pipe(
      map(
          (data:Array<Travel>) => this.travelTransform(data)
      )
    )
  } 

  getId(): Observable<number> {
    return this.http.get<number>(environment.API_BASE + 'travels/id').pipe(
      map(
          (data:number) => data[0]
      )
    )
  } 
  
  private travelTransform(data:Array<Travel>):Array<Travel>{
    let resp = new Array<Travel>();
    let ord : Travel;
    for(let i=0;i<data.length;i++){
      ord = {
        id : data[i].id,
        travelerId : data[i].travelerId,
        travelerName: data[i].travelerName,
        price : data[i].price,
        description : data[i].description,
        tmstmp: data[i].tmstmp
      };
      
      resp.push(ord);
    }
    return resp;
  }

  addTravel(travel:Travel): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const body = {
      'fleteroId':travel.travelerId,
      'descripcion':travel.description,
      'precio':travel.price
    }
    console.log(body)
    if(travel.id){
      return this.http.put<Travel>(environment.API_BASE + 'travels/' + travel.id,body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }else{
      console.log('llego al post <Travel>')
      return this.http.post<Travel>(environment.API_BASE + 'travels/',body,httpOptions).pipe(
        map(
            (data:any) => data
        )
      )
    }
  }

  deleteTravel(travel:Travel): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.delete<any>(environment.API_BASE + 'travels/' + travel.id , httpOptions).pipe(
      map(
          (data:any) => data
      )
    )
  }
}
