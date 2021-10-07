import { Component, OnInit } from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  id!: number;
  car: Car= new Car();
  constructor(private carService: CarService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.carService.getCarById(this.id).subscribe(data =>{
      this.car=data;
    }, error => console.log(error));

  }
  onSubmit(){
    this.carService.updateCar(this.id, this.car).subscribe(data =>{
      this.goToCarList();
    },error => console.log(error));
  }
  goToCarList(){
    this.router.navigate(['/cars']);
  }

}
