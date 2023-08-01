import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent {
tvshows!:any[];
imgprefix:string="https://image.tmdb.org/t/p/w500";


  constructor(private _MoviesService:MoviesService){
    _MoviesService.gettrendingmovies().subscribe((data)=>{
      console.log(data);
      this.tvshows=data.results;
    })

  }

}
