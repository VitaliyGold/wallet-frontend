import { RootStore } from "@/app";
import { createSelector } from "@reduxjs/toolkit";
import { createExpensesAdapter } from './createExpensesSlice';

const expensesStateSelector = (state: RootStore) => state.expenses;

const expensesListSelector = createSelector(expensesStateSelector, (state) => ({ expensesList: state.expensesList, totalExpenses: state.totalExpenses }));

const createExpensesStateSelector = createExpensesAdapter.getSelectors((state: RootStore) => state.createExpenses);


export {
    expensesListSelector,
    createExpensesStateSelector,
}