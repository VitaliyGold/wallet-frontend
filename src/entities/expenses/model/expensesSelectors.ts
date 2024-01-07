import { RootStore } from "@/app";
import { createSelector } from "@reduxjs/toolkit";

const expensesStateSelector = (state: RootStore) => state.expenses;

const expensesListSelector = createSelector(expensesStateSelector, (state) => ({ expensesList: state.expensesList, totalExpenses: state.totalExpenses }));


export {
    expensesListSelector,
}