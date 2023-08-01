import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies!:any[];
  imgprefix:string="https://image.tmdb.org/t/p/w500";


  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getmovies().subscribe((data)=>{
      console.log(data);
       this.movies = data.results;
    });
  }

}
