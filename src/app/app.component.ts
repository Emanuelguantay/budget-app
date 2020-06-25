import { Component } from '@angular/core';
import { MovementService } from './Service/MovementService.service';
import { Movement } from './Models/movement.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';
  budget: number;
  income: number;
  expense: number;
  expensePercentage: number;
  incomeList: Movement[] = [];
  expenseList: Movement[] = [];
  incomeTotal: number = 0;
  expenseTotal: number = 0;

  constructor(
    private movementService: MovementService,
    ){
  }

  ngOnInit(): void {
    this.incomeList = this.movementService.incomeList;
    this.expenseList = this.movementService.expenseList;
  }

  getIncomeTotal(){
    let incomeTotal: number = 0;
    this.incomeList.forEach( (income) => incomeTotal += income.value );
    return incomeTotal;
  }

  getExpenseTotal(){
    let expenseTotal: number = 0;
    this.expenseList.forEach( (expense) => expenseTotal += expense.value );
    return expenseTotal;
  }

  getPercentageTotal(){
    var percentage =  this.getExpenseTotal() / this.getIncomeTotal();
    // var num = Number(percentage)
    // var roundedString = num.toFixed(2);
    // var rounded = Number(roundedString);
    return percentage;
  }

  getBudgetTotal(){
    console.log(this.getIncomeTotal());
    console.log(this.getExpenseTotal());
    return this.getIncomeTotal() - this.getExpenseTotal();
  }
}
