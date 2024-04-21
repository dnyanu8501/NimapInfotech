import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
url='http://localhost:3000/user'
  constructor(public http:HttpClient) { }
  postApiCAll(data:any){
   return this.http.post(this.url,data)
  }

}
