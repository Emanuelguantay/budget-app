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
  incomeList: Movement[];
  expenseList: Movement[];

  constructor(
    private movementService: MovementService,
    ){
  }

  ngOnInit(): void {
    this.incomeList = this.movementService.incomeList;
    console.log(this.incomeList);
    this.expenseList = this.movementService.expenseList;
  }
}
