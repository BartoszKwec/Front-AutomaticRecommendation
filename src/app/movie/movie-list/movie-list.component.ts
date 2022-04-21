import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/movie'
import {MovieService} from "../../service/movie.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies!: Movie[];

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit(): void {
    // this.movies = [{
    //   "id" : 1,
    //   "movieName" : "aaa",
    //   "movieLength": 2.19,
    //   "movieType": "string",
    // },
    //   {
    //     "id" : 2,
    //     "movieName" : "asdasdas dsadas",
    //     "movieLength": 2.21,
    //     "movieType": "sasdas",
    //   }];

    this.getMovies();
  }
  private getMovies(){
    this.movieService.getMoviesList().subscribe(data => {
      console.log(data);
      this.movies = data;
    });
  }
  updateMovie(id: number){
    this.router.navigate(['update-movie', id]);
  }
  deleteMovie(id: number){
    this.movieService.deleteMovie(id).subscribe(data =>{
      console.log(data);
      this.getMovies();
    })
  }

}
