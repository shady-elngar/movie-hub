import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  id:any;

  errVisibility = false
  
  tvDetails:any;
  
  imagePrefix:string = "https://image.tmdb.org/t/p/w500/"
  
  topTenTv:any=[];

  constructor(_ActivatedRoute:ActivatedRoute, _MoviesService:MoviesService ) {
  
    this.id = _ActivatedRoute.snapshot.paramMap.get('id')
  
      _MoviesService.getTvDetails(this.id).subscribe(
      (data) => {
        this.tvDetails = data;
        this.errVisibility =true
      }
    )
  
    _MoviesService.getTrendingTv().subscribe(
    (movieData) => {
      for(let i = 0; i< 4; i++){
        this.topTenTv.push(movieData.results[i])
      }
    }
    )
  
}

  ngOnInit(): void {
  }

}
