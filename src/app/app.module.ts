import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module'
import {HttpClientModule} from '@angular/common/http';
import { TvShowComponent } from './tv-show/tv-show.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CelebrityComponent } from './celebrity/celebrity.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MovieDetailComponent,
    NavBarComponent,
    TvShowComponent,
    TvDetailsComponent,
    RegisterComponent,
    LoginComponent,
    CelebrityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
