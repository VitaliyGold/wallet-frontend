import type { RootStore } from "@/app";
import { createSelector } from "@reduxjs/toolkit";
import { createExpensesAdapter } from './createExpensesSlice';
import { expensesAdapter } from "./expensesSlice";

const expensesStateSelector = (state: RootStore) => state.expenses;

const expensesListEntitiesSelector = expensesAdapter.getSelectors((state: RootStore) => state.expenses);

const createExpensesStateSelector = createExpensesAdapter.getSelectors((state: RootStore) => state.createExpenses);

const totalExpensesSelector = createSelector(expensesStateSelector, (state) => state.totalExpenses);


export {
    expensesListEntitiesSelector,
    createExpensesStateSelector,
    totalExpensesSelector
}