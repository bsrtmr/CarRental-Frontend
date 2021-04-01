import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  
  carImages:CarImage[] = [];
  urlPath: string = 'https://localhost:44331';
  constructor(private carImageService:CarImageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImages(params["carId"])
      }else{
        this.getCarImagesAll()
      }
    })
  }

  getCarImagesAll(){
    this.carImageService.getCarImagesAll().subscribe(response=>{
      this.carImages = response.data
    })
  }

  getCarImages(carId:number){
    this.carImageService.getCarImages(carId).subscribe(response=>{
      this.carImages = response.data
    })
  }
}
