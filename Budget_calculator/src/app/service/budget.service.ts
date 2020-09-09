
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { expense } from '../expense';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  server: string= 'http://localhost/Xelpmoc/Daily-Expense-calculator/budget-cal/public/' ;
  headers: Headers = new Headers();
  options:any;
  hea: any;

  constructor(private http:HttpClient) { 
     this.headers.append('enctype', 'multipart/form-data');
     this.headers.append('Content-Type', 'application/json');
     this.headers.append('X-Requested-With', 'XMLHttpRequest');

     this.options = new RequestOptions({headers:this.headers});
  }

  addExpense(expenseReason, expenseAmount):Observable<expense>
  {
    const newExpense = new expense(expenseReason,expenseAmount);
    console.log(newExpense);
    return this.http.post<expense>(this.server+'addedExpense',newExpense);
  }
}
