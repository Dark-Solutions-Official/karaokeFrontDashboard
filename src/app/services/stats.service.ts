import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  address = 'http://localhost:4400/stadistics/';
  //npm install chart.js --save
  //npm install ng2-charts --save

  userEmail: string = 'sam.astua7@gmail.com';

  constructor(private http: HttpClient) { }

  getStats(){

    return this.http.get(this.address + this.userEmail);
  }

}
