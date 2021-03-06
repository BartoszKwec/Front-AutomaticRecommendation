import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../model/movie";


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseURL = "http://localhost:9090/movies"
  constructor(private httpClient: HttpClient) { }

//port 4200   http://localhost:8080/api/v1/movies

  getMoviesList(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(`${this.baseURL}`);
  }

  createMovie(movie: Movie): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, movie);


  }

  getMovieById(id: number): Observable<Movie>{
    return this.httpClient.get<Movie>(`${this.baseURL}/${id}`);
  }
  updateMovie(id: number, movie: Movie): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, movie);
  }
  deleteMovie(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
