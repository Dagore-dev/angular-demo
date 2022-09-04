import { Component } from '@angular/core'
import { Car } from 'src/types/Car'
import { CarsService } from './cars.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-demo'
  prefix: string = 'I am a '
  name: string = 'David'
  colors: string[] = ['Red', 'Green', 'Blue']
  cars: Car[] = [
    { make: 'Subaru', model: 'Outback', miles: 56486 },
    { make: 'Honda', model: 'Accord', miles: 39393 },
    { make: 'BMW', model: 'X3', miles: 4400 }
  ]
  carsFromService: Car[]
  count: number = 0
  phrase: string = 'I\'s going'
  username: string = ''
  make: string = ''
  model: string = ''
  miles: number = 0
  
  constructor (private carsService: CarsService) {
    this.carsFromService = carsService.getCars()
  }
  
  speak(): string {
    const sentence = this.prefix.concat(this.name)
    return sentence
  }

  increaseCount(): void {
    this.count++
  }

  append(): void {
    this.phrase = this.phrase.concat(' ...and going')
  }

  addCar(): void {
    const car: Car = { 
      make: this.make,
      model: this.model,
      miles: this.miles 
    }

    this.carsService.addCar(car)

    this.make = ''
    this.model = ''
    this.miles = 0
  }
}
