import {Movie} from "./movie";

export class Rating {
  ratingId!: number;
  rating!: number;
  userId!: number;
  movie!: Movie;
  timestamp!: string

}

export  class RatingBox{
  userId!: number;
  ratings!: Rating[]
}
