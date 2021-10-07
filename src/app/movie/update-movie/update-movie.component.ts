import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Movie} from "../../model/movie";

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})


export class UpdateMovieComponent implements OnInit {
  id!: number;
  movie: Movie = new Movie();
  constructor(private movieService: MovieService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id= this.route.snapshot.params['id'];
    this.movieService.getMovieById(this.id).subscribe(data =>{
      this.movie=data;
    },error => console.log(error));
  }
  // updateMovie(){
  //   this.movieService.updateMovie(this.id,this.movie).subscribe(data =>{
  //     console.log(data);
  //     this.movie = new Movie();
  //     this.gotoList();
  //   }, error => console.log(error));
  // }

  // saveMovie(){
  //   this.movieService.createMovie(this.movie).subscribe( data =>{
  //       console.log(data);
  //       this.goToMovieList();
  //     },
  //     error => console.log(error));
  // }
  // goToMovieList(){
  //   this.router.navigate(['/movies']);
  // }
  //
  // onSubmit(){
  //   console.log(this.movie);
  //   this.saveMovie();
  // }
  onSubmit(){
    this.movieService.updateMovie(this.id, this.movie).subscribe( data =>{
        this.goToMovieList();
      }
      , error => console.log(error));
  }
  goToMovieList(){
    this.router.navigate(['/movies']);
  }

}
