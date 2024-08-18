import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) {}
  
  getTrendingMovies():Observable<any>
  {
   return  this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=2659e87a68fc082034eb829bd06caab3')
  }
    
  getTrendingTv():Observable<any>
  {
   return  this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=2659e87a68fc082034eb829bd06caab3')
  }

  getTrendingCeleb():Observable<any>
  {
   return  this._HttpClient.get('https://api.themoviedb.org/3/trending/person/week?api_key=2659e87a68fc082034eb829bd06caab3')
  }

  getMovieDetails(id):Observable<any>
  {
   return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2659e87a68fc082034eb829bd06caab3&language=en-US`)
  }

  getTvDetails(id):Observable<any>
  {
   return  this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=2659e87a68fc082034eb829bd06caab3&language=en-US`)
  }

  }

