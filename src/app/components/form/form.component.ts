import { Component } from '@angular/core';
import { Movement } from 'src/app/Models/movement.models';
import { MovementService } from 'src/app/Service/MovementService.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
    description: string;
    valueAdd: number;
    optionSelected: string  = 'ing';
    type : string = 'ing';
    constructor(
        private movementService: MovementService,
        ){
      }


    onAddValues(){
        let movement = new Movement(this.description, this.valueAdd);
        var option = this.optionSelected;
        if (this.type == 'ing'){
            this.movementService.addIncome(movement);
        }else{
            this.movementService.addExpense(movement);
        }
    }

    typeOperation(event){
        this.type = event.target.value;
    }
}
