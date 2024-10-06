import type { RootStore } from "@/app";

import { createSelector } from "@reduxjs/toolkit";

import { expensesBarAdapter } from "./expensesBarSlice";

const expensesBarStateSelector = (state: RootStore) => state.expensesBar;

const isExpensesBarLoadingSelector = createSelector(expensesBarStateSelector, (state) => state.loading);

const isExpensesBarErrorSelector = createSelector(expensesBarStateSelector, (state) => state.error);

const expensesBarDataSelector = expensesBarAdapter.getSelectors((state: RootStore) => state.expensesBar);

export {
    isExpensesBarLoadingSelector,
    isExpensesBarErrorSelector,
    expensesBarDataSelector,
}