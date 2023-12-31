import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LabtestsService {
  httpOptions:any;
  constructor(private http:HttpClient
    ) { 

      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': "Bearer "+sessionStorage.getItem("token")
        })
      }
    }
  public getLabTests():Observable<any>{
  
    return this.http.get("http://localhost:4500/labreports",this.httpOptions);
  }
}
