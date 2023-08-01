import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private _HttpClient:HttpClient) { }

  getmovies():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a2d14e11fe51fdcdb59b20833a4fbf08');
  }

  gettrendingmovies():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/tv/popular?api_key=a2d14e11fe51fdcdb59b20833a4fbf08');
  }

  getitemdetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a2d14e11fe51fdcdb59b20833a4fbf08`);
  }

  gettvdetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=a2d14e11fe51fdcdb59b20833a4fbf08`);
  }

}
