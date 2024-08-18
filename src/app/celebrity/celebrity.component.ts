import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-celebrity',
  templateUrl: './celebrity.component.html',
  styleUrls: ['./celebrity.component.scss']
})
export class CelebrityComponent implements OnInit {

 // trendingCeleb = [];

  //imagePrefix:string = "https://image.tmdb.org/t/p/w500/";


  constructor(_MoviesService:MoviesService) {

    /*_MoviesService.getTrendingCeleb().subscribe( 
      
      (data) => { this.trendingCeleb = data.results },  

      (err) => {console.log(err)} )*/

   }

  

  ngOnInit(): void {
  }

}
