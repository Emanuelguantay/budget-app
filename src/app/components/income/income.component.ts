import { Component, Input } from '@angular/core';
import { Movement } from 'src/app/Models/movement.models';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html'
})
export class IncomeComponent {
    @Input() incomeList : Movement[];
}