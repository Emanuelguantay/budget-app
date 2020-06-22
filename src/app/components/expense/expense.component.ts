import { Component, Input } from '@angular/core';
import { Movement } from 'src/app/Models/movement.models';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html'
})
export class ExpenseComponent {
    @Input() expenseList: Movement[];
}