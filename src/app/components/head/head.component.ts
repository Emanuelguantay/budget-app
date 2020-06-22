import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html'
})
export class HeadComponent {
    @Input() budget: number;
    @Input() income: number;
    @Input() expense: number;
    @Input() expensePercentage: number;
}
