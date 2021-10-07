import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car";



@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseURL = "http://localhost:8080/api/v2/cars"
  constructor(private httpClient: HttpClient) { }

//port 4200

  getCarsList(): Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${this.baseURL}`);
  }

  createCar(car: Car): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, car);


  }

  getCarById(id: number): Observable<Car>{
    return this.httpClient.get<Car>(`${this.baseURL}/${id}`);
  }
  updateCar(id: number, car: Car): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, car);
  }
  deleteCar(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
