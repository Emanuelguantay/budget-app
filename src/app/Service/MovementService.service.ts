import { Movement } from '../Models/movement.models';

export class MovementService{
    incomeList: Movement[] = [new Movement("juan", 2), new Movement("Emanuel", 4)];
    expenseList: Movement[]= [new Movement("juan", 1), new Movement("Emanuel", 1)];

    addIncome(movement: Movement){
        this.incomeList.push(movement);
    }

    addExpense(movement: Movement){
        this.expenseList.push(movement);
    }

    deletedIncome(movement: Movement){
        const index: number = this.incomeList.indexOf(movement);
        this.incomeList.splice(index, 1);
    }

    deletedExpense(movement: Movement){
        const index: number = this.expenseList.indexOf(movement);
        this.expenseList.splice(index, 1);
    }
}