import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MoviesService} from '../movies.service'


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

id:any;

errVisibility = false

moviesDetails:any;

imagePrefix:string = "https://image.tmdb.org/t/p/w500/"

topTen:any=[];

  constructor(_ActivatedRoute:ActivatedRoute, _MoviesService:MoviesService ) {
  
  this.id = _ActivatedRoute.snapshot.paramMap.get('id')

    _MoviesService.getMovieDetails(this.id).subscribe(
    (data) => {
      this.moviesDetails = data;
      this.errVisibility =true
    }
  )

  _MoviesService.getTrendingMovies().subscribe(
  (movieData) => {
    for(let i = 0; i< 4; i++){
      this.topTen.push(movieData.results[i])
    }
  }
  )

   }

  ngOnInit(): void {
  }

}
