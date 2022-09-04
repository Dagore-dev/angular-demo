import { Injectable } from '@angular/core'
import { Car } from 'src/types/Car'

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars: Car[] = [
    { make: 'Subaru', model: 'Outback', miles: 56486 },
    { make: 'Honda', model: 'Accord', miles: 39393 },
    { make: 'BMW', model: 'X3', miles: 4400 }
  ]
  
  constructor() { }

  getCars(): Car[] {
    return this.cars
  }

  addCar(car: Car): CarsService {
    this.cars.push(car)
    return this
  }
}
