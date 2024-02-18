import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Expenses, ExpensesFilters } from "../types/expenses";
import { getExpensesListThunk } from "./expensesThunks";
import { getMonthAgo } from "@/shared/lib/dateMethods";

import { defaultExpensesFilter } from "../consts";

const expensesAdapter = createEntityAdapter({
    selectId: (expenses: Expenses) => expenses.expenseId,
})

const ExpensesSlice = createSlice({
    name: 'expensesSlice',
    initialState: expensesAdapter.getInitialState({
        totalExpenses: 0,
        filters: {
            expensesName: '',
            startDate: getMonthAgo(new Date).getTime(),
            endDate: new Date().getTime(),
        },
    }),
    reducers: {
        addExpenses: expensesAdapter.addMany,
        clearExpenses(state) {
            expensesAdapter.removeAll(state);
            state.totalExpenses = 0
        },
        setFilters(state, { payload }: PayloadAction<ExpensesFilters>) {
            state.filters = payload;
        },
        setDefaultFilter(state) {
            state.filters = defaultExpensesFilter();
        },
        removeById: expensesAdapter.removeOne,
        patchExpense(state, { payload }: PayloadAction<Expenses>) {
            expensesAdapter.updateOne(state, { id: payload.expenseId, changes: payload });
        }
    },
    extraReducers(builder) {
        builder.addCase(getExpensesListThunk.fulfilled, (state, action) => {
            expensesAdapter.addMany(state, action.payload.data);
            state.totalExpenses = action.payload.total;
        })
    },
});

export const { actions: expensesActions, reducer: expensesReducer } = ExpensesSlice;
export {
    expensesAdapter,
}