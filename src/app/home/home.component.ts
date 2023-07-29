import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
movies!:any[];
tvs!:any[];
imgprefix:string="https://image.tmdb.org/t/p/w500";

  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getmovies().subscribe((data)=>{
      console.log(data);
       this.movies = data.results.slice(0,10);
    });


    _MoviesService.gettrendingmovies().subscribe((data)=>{
      console.log(data);
       this.tvs = data.results.slice(0,10);
    });
   }

}
