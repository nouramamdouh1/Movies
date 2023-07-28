import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import { userdata } from './userdata';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // public currentusers=new BehaviorSubject(null);
  currentusers = new BehaviorSubject<userdata | null>(null);
  

  constructor(private _HttpClient: HttpClient) {
   }
   
  register(registerformvalue:any):Observable<any> {
    return this._HttpClient.post('https://movies-api.routemisr.com/signup',registerformvalue)
  }

  login(loginformvalue:any):Observable<any> {
    return this._HttpClient.post('https://movies-api.routemisr.com/signin',loginformvalue);
  }

  savecurrentusers(firstname:any, lastname:any , email:any , token:any){
    let user = new userdata (firstname, lastname , email , token);
    this.currentusers.next(user);


  }

}
