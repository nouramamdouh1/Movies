import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {
  moviedetails:any;
  id:any;
  imgprefix:string="https://image.tmdb.org/t/p/w500";

  constructor(private _MoviesService:MoviesService, private _ActivatedRoute:ActivatedRoute){

    // this.id=_ActivatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    _MoviesService.getitemdetails(_ActivatedRoute.snapshot.params['id'] ).subscribe((data)=>{
      this.moviedetails=data;
      console.log(data);
    })
  }

}
