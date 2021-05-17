import { Injectable } from '@angular/core';
import { Meal } from './meals/meal'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  numberOfMeals: number;
  selectedMeals: Set<Meal>;

  constructor() { 
    this.selectedMeals = new Set<Meal>();
    this.numberOfMeals = 6;
  }

  addMeal(meal: Meal): void {
    this.selectedMeals.add(meal);
  }

  removeMeal(meal: Meal): void {
    this.selectedMeals.delete(meal);
  }

  getMeals(): Set<Meal> {
    return this.selectedMeals;
  }

  getNumberOfMeals(): number {
    return this.numberOfMeals;
  }

  setNumberOfMeals(value: number): void {
    this.numberOfMeals = value;
  }
}
