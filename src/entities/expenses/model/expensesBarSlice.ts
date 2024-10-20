import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getExpensesGroupByCategoryThunk } from "./thunks/expensesGroupThunks";
import { GroupExpenses } from "../types/expenses";

const expensesBarAdapter = createEntityAdapter({
    selectId: (groupExpenses: GroupExpenses) => groupExpenses.categoryId,
});

const ExpensesBarSlice = createSlice({
    name: 'expensesBarSlice',
    initialState: expensesBarAdapter.getInitialState({
        loading: true,
        error: false,
    }),
    reducers: {
        clearExpenses: expensesBarAdapter.removeAll,
    },
    extraReducers(builder) {
        builder.addCase(getExpensesGroupByCategoryThunk.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        }),
        builder.addCase(getExpensesGroupByCategoryThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        }),
        builder.addCase(getExpensesGroupByCategoryThunk.fulfilled, (state, action) => {
            state.loading = false;
            expensesBarAdapter.addMany(state, action.payload);
        })
    }
});


export const { actions: expensesBarActions, reducer: expensesBarReducer } = ExpensesBarSlice;

export {
    expensesBarAdapter,
}