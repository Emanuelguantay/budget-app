import { Movement } from '../Models/movement.models';

export class MovementService{
    incomeList: Movement[] = [new Movement("juan", 23), new Movement("Emanuel", 123)];
    expenseList: Movement[];

    addIncome(movement: Movement){
        this.incomeList.push(movement);
    }

    addExpense(movement: Movement){
        this.expenseList.push(movement);
    }
}