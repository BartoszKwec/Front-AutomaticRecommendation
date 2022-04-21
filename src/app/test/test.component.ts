import { Component, OnInit } from '@angular/core';
import {Rating, RatingBox} from "../model/rating";
import {RatingService} from "../service/rating.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  ratings!: Rating[];
  ratingsBox!: RatingBox[];

  test: String[] = ['ar','d' ];

  constructor(private ratingService: RatingService,
              private router: Router) { }

  ngOnInit(): void {
    this.getRatings();
  }
  private getRatings(){
    this.ratingService.getRatingsList().subscribe(data => {
      console.log(data);
      this.ratings = data;
    });
  }
}
