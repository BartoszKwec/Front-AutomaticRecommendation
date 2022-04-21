import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rating, RatingBox} from "../model/rating";
import {Movie} from "../model/movie";



@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private baseURL = "http://localhost:9090/ratings"
  constructor(private httpClient: HttpClient) { }
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
//port 4200

  getRatingsList(): Observable<Rating[]>{
    return this.httpClient.get<Rating[]>(`${this.baseURL}`);
  }
  getRatingsBox(): Observable<RatingBox[]>{
    return this.httpClient.get<RatingBox[]>(`${this.baseURL}`);
  }
  createRating(rating: Rating): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, rating);


  }

  getRatingById(id: number): Observable<Rating>{
    return this.httpClient.get<Rating>(`${this.baseURL}/${id}`);
  }
  updateRating(id: number, rating: Rating): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, rating);
  }
  deleteRating(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getRatingsForMovie(movie:Movie): Observable<Rating[]> {
    return this.httpClient.post<Rating[]>('https://localhost:444/api/doctors/reservations', movie, {headers: this.headers});
  }
}
