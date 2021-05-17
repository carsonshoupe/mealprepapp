import { Component, Input, OnInit } from '@angular/core';
import { Meal } from './meal';
import { MEALS } from './mock-meals';
import { OrderService} from '../order.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DescriptionModalComponent } from '../description-modal/description-modal.component';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  meals: Meal[] = Array.from(MEALS);


  selectedMeals: Meal[] = [];
  numberOfMeals?: number;

  constructor(private orderService: OrderService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.selectedMeals = Array.from(this.orderService.getMeals());
    this.numberOfMeals = this.orderService.getNumberOfMeals();
  }

  onSelect(event: any, meal: Meal) {
    event.target.checked ? this.orderService.addMeal(meal) : this.orderService.removeMeal(meal);
  }

  onNumberOfMealsChange(value: number) {
    this.orderService.setNumberOfMeals(value);
    this.numberOfMeals = this.orderService.getNumberOfMeals();
  }

  drop(event: CdkDragDrop<Meal[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  openModal(meal: Meal): void {
    const dialogRef = this.dialog.open(DescriptionModalComponent, {
      width: '250px',
      data: meal
    })
  }

  onNext() {
    this.orderService.selectedMeals = new Set<Meal>(this.selectedMeals);
  }

  toArray(set : Set<any>) {
    return Array.from(set);
  }
}
