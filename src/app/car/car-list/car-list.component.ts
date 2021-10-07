import { Component, OnInit } from '@angular/core';
import {Car} from "../../model/car";
import {Router} from "@angular/router";
import {CarService} from "../../service/car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars!: Car[];


  constructor(private carService: CarService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCars();
  }
  private getCars(){
    this.carService.getCarsList().subscribe(data =>{
      this.cars=data;
    });
  }
  updateCar(id: number){
    this.router.navigate(['update-car', id]);
  }
  deleteCar(id: number){
    this.carService.deleteCar(id).subscribe(data =>{
      console.log(data);
      this.getCars();
    })
  }

}
