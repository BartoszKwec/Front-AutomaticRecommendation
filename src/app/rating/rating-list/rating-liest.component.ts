import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/movie'
import {MovieService} from "../../service/movie.service";
import {Router} from "@angular/router";
import {Rating, RatingBox} from "../../model/rating";
import {RatingService} from "../../service/rating.service";
@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss']
})
export class RatingListComponent implements OnInit {

   ratings!: Rating[];
  ratingsBox!: RatingBox[];

  constructor(private ratingService: RatingService,
              private router: Router) { }



  getRatingsForMovie(movie: Movie): void {
    this.ratingService.getRatingsForMovie(movie).subscribe(doctor => {
        console.log(doctor);

      }
    );
  }

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

    this.getRatings();
  }
  private getRatings(){
    this.ratingService.getRatingsList().subscribe(data => {
      console.log(data);
      this.ratings = data;
    });
  }

  // private getRatings(){
  //   this.ratingService.getRatingsList().subscribe(data => {
  //     this.ratings = data;
  //   });
  // }
  updateMovie(id: number){
    this.router.navigate(['update-rating', id]);
  }
  deleteMovie(id: number){
    this.ratingService.deleteRating(id).subscribe(data =>{
      console.log(data);
      this.getRatings();
    })
  }

}
