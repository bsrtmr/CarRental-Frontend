import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carImages:CarImage[] = [];
  carDetails:CarDetail[]= [];

  urlPath: string = 'https://localhost:44331';

  constructor(private carService:CarService, private carImageService:CarImageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImages(params["carId"])
        this.getCarsById(params["carId"])
      }
    })
  }

  getCarsById(carId:number){
    this.carService.getCarsById(carId).subscribe(response=>{
      this.carDetails = response.data
    })
  }

  getCarImages(carId:number){
    this.carImageService.getCarImages(carId).subscribe(response=>{
      this.carImages = response.data
    })
  }

  getSliderClassName(index: Number) {
    if (index == 0) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

}
