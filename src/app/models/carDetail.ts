import { Car } from "./car";

export interface CarDetail extends Car{
    carId:number,
    brandName:string,
    colorName:string,
}