import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { CelebrityComponent } from './celebrity/celebrity.component';

const routes: Routes = 
[
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"tv-show",canActivate:[AuthGuard], component:TvShowComponent},
  {path:"movies",canActivate:[AuthGuard], component:MoviesComponent},
  {path:"home",canActivate:[AuthGuard], component:HomeComponent},
  {path:"MovieDetails/:id", component:MovieDetailComponent},
  {path:"tvDetails/:id", component:TvDetailsComponent},
  {path:"register", component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:"celeb",canActivate:[AuthGuard], component:CelebrityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }