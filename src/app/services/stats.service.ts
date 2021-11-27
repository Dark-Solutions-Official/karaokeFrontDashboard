import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  address = 'http://services.saymonastua.com:7002/stadistics/';
  //npm install chart.js --save
  //npm install ng2-charts --save

  userEmail: string = 'sam.astua7@gmail.com';

  constructor(private http: HttpClient,  private cookieService:CookieService) { }

  getStats(){

    this.userEmail = this.cookieService.get("email");
    return this.http.get(this.address + this.userEmail);
  }

}
