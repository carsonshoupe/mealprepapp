import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Meal } from '../meals/meal';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  selectedMeals?: Set<Meal>;
  numberOfMeals?: number;

  constructor(private orderService : OrderService) {
  }

  ngOnInit(): void {
    this.selectedMeals = this.orderService.getMeals();
    this.numberOfMeals = this.orderService.getNumberOfMeals();
  }

}
