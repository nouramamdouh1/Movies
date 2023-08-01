import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css']
})
export class TvdetailsComponent {

  show:any;
  id:any; 
  imgprefix:string="https://image.tmdb.org/t/p/w500";

  constructor(private _MoviesService:MoviesService,private _ActivatedRoute:ActivatedRoute) {

    

    _MoviesService.gettvdetails(_ActivatedRoute.snapshot.params['id']).subscribe((data)=>{
      console.log(data);
      
       this.show=data;
    })
   }

}
