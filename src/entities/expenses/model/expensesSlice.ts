import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { Expenses } from "../types/expenses";
import { getExpensesListThunk } from "./expensesThunks";

const expensesAdapter = createEntityAdapter({
    selectId: (expenses: Expenses) => expenses.expenseId,
})

const ExpensesSlice = createSlice({
    name: 'expensesSlice',
    initialState: expensesAdapter.getInitialState({
        totalExpenses: 0,
    }),
    reducers: {
        addExpenses: expensesAdapter.addMany,
        clearExpenses: expensesAdapter.removeAll,
    },
    extraReducers(builder) {
        builder.addCase(getExpensesListThunk.fulfilled, (state, action) => {
            expensesAdapter.addMany(state, action.payload.data);
            console.log(action.payload.total)
            state.totalExpenses = action.payload.total;
        })
    },
});

export const { actions: expensesActions, reducer: expensesReducer } = ExpensesSlice;
export {
    expensesAdapter,
}