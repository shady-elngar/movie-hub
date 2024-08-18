import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {

  trendingTv = []
   
  imagePrefix:string = "https://image.tmdb.org/t/p/w500/"

  constructor(_MoviesService:MoviesService) {

    _MoviesService.getTrendingTv().subscribe( 
      
      (data) => { this.trendingTv = data.results } , 
          
      (err) => {console.log(err)} )

   }

  ngOnInit(): void {
  }

}
