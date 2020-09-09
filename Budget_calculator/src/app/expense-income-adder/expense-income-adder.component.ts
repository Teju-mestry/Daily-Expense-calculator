import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../service/budget.service';


@Component({
  selector: 'app-expense-income-adder',
  templateUrl: './expense-income-adder.component.html',
  styleUrls: ['./expense-income-adder.component.css']
})
export class ExpenseIncomeAdderComponent implements OnInit {

  expenseReason:string;
  expenseAmount:number;

  constructor(private budgetServeice:BudgetService) { }

  ngOnInit(): void {
  }

  AddExpense(e: any){

    e.preventDefault();

    this.budgetServeice.addExpense(this.expenseReason,this.expenseAmount).subscribe((data) => {
      console.log("task-added");
    });

  }

}
