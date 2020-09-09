<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Expense ;

class expenseController extends Controller
{
    function addedExpense(Request $request){

        $expenseReason = $request->input('expenseReason');
        $expenseAmount = $request->input('expenseAmount');
        $initialAmount = 2000;
        $remainingAmount = $initialAmount - $expenseAmount;

        $expense = new Expense;

        $expense->expense_reason= $expenseReason;
        $expense->expense_amount = $expenseAmount;
        $expense->remaining_amount= $remainingAmount;

        $expense->save();

        $expense->create($request->all());

        return $expense;


    }
}
