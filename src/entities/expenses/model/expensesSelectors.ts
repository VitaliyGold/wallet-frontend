import { StateSchema } from "@/app";
import { createSelector } from "@reduxjs/toolkit";

const expensesStateSelector = (state: StateSchema) => state.expenses;

const expensesListSelector = createSelector(expensesStateSelector, (state) => state.expensesList);


export {
    expensesListSelector,
}