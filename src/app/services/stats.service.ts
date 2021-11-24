import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  address = 'http://localhost:4400/stadistics/';
  //npm install chart.js --save
  //npm install ng2-charts --save

  userEmail: string = '';

  constructor(private http: HttpClient) { }

  getStats(){
    
    const httpParams = new HttpParams()
    .set('email', this.userEmail)

    return this.http.get(this.address + httpParams);
  }

}
