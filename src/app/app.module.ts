import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

import { HeadComponent } from './components/head/head.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { IncomeComponent } from './components/income/income.component';
import { FormComponent } from './components/form/form.component';
import { MovementService } from './Service/MovementService.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ExpenseComponent,
    IncomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    MovementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
