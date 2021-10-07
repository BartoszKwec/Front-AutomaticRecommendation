import { Component, OnInit } from '@angular/core';
import {Movie} from "../../model/movie";
import {MovieService} from "../../service/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  movie: Movie = new Movie();
  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveMovie(){
    this.movieService.createMovie(this.movie).subscribe( data =>{
        console.log(data);
        this.goToMovieList();
    },
      error => console.log(error));
  }
  goToMovieList(){
    this.router.navigate(['/movies']);
  }

  onSubmit(){
    console.log(this.movie);
    this.saveMovie();
  }

}
