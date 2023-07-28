import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }
   
  register(registerformvalue:any):Observable<any> {
    return this._HttpClient.post('https://movies-api.routemisr.com/signup',registerformvalue)
  }



}
