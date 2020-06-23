import { Component, Input } from '@angular/core';
import { Movement } from 'src/app/Models/movement.models';
import { MovementService } from 'src/app/Service/MovementService.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html'
})
export class ExpenseComponent {

  expenseList: Movement[] = [];
  @Input() incomeTotal: number;

  constructor(
    private movementService: MovementService,
  ) {
  }

  ngOnInit(): void {
    this.expenseList = this.movementService.expenseList;
  }

  deletedRecord(expense: Movement){
    this.movementService.deletedExpense(expense);
  }

  calculatePercentage(expense: Movement){
    var percentage = expense.value / this.incomeTotal;
    var num = Number(percentage)
    var roundedString = num.toFixed(2);
    var rounded = Number(roundedString);
    return rounded;
  }
}