import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { CreateMovieComponent } from './movie/create-movie/create-movie.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { UpdateMovieComponent } from './movie/update-movie/update-movie.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import {MovieService} from "./service/movie.service";
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CreateCarComponent } from './car/create-car/create-car.component';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { UpdateCarComponent } from './car/update-car/update-car.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    CreateMovieComponent,
    UpdateMovieComponent,
    MovieDetailsComponent,
    FooterComponent,
    NavbarComponent,
    MainPageComponent,
    CreateCarComponent,
    CarDetailsComponent,
    CarListComponent,
    UpdateCarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
