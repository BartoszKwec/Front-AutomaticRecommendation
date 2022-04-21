import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MovieListComponent} from "./movie/movie-list/movie-list.component";
import {CreateMovieComponent} from "./movie/create-movie/create-movie.component";
import {UpdateMovieComponent} from "./movie/update-movie/update-movie.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {CarListComponent} from "./car/car-list/car-list.component";
import {CreateCarComponent} from "./car/create-car/create-car.component";
import {UpdateCarComponent} from "./car/update-car/update-car.component";
import {MenuComponent} from "./menu/menu.component";
import {RatingListComponent} from "./rating/rating-list/rating-liest.component";
import {TestComponent} from "./test/test.component";
import {MenuAlgorithmComponent} from "./menu-algorithm/menu-algorithm.component";
import {AlgorithmComponent} from "./algorithms/algorithm-softmax/algorithm.component";


const routes: Routes = [
  {path:'movies', component: MovieListComponent},
  {path: 'create-movie', component: CreateMovieComponent},
  {path: "movies", redirectTo: 'movies', pathMatch: 'full'},
  {path: 'update-movie/:id', component: UpdateMovieComponent},
  {path: 'main', component: MainPageComponent},
  {path: 'users', component: CarListComponent},
  {path: 'users/create-cars', component: CreateCarComponent},
  {path: 'update-user/:id', component: UpdateCarComponent},
  {path: '', component: MenuComponent},
  {path: 'ratings', component: RatingListComponent},
  {path: 'test', component: TestComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'algorithms', component: MenuAlgorithmComponent},
  {path: 'softmax', component: AlgorithmComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
