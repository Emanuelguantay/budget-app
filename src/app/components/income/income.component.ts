import { Component, Input } from '@angular/core';
import { Movement } from 'src/app/Models/movement.models';
import { MovementService } from 'src/app/Service/MovementService.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html'
})
export class IncomeComponent {
  incomeList: Movement[] = [];

  constructor(
    private movementService: MovementService,
  ) {
  }

  ngOnInit(): void {
    this.incomeList = this.movementService.incomeList;
  }

  deletedRecord(income: Movement){
    this.movementService.deletedIncome(income);
  }
}