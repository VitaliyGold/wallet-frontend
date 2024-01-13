import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExpensesSliceSchema } from "../types/expensesSliceSchemas";
import { Expenses } from "../types/expenses";
import { getExpensesListThunk } from "./expensesThunks";

const initialState: ExpensesSliceSchema = {
    expensesList: [],
    totalExpenses: 0,
}

const ExpensesSlice = createSlice({
    name: 'expensesSlice',
    initialState: initialState,
    reducers: {
        addExpenses(state, { payload }: PayloadAction<Expenses[]>) {
            if (state.expensesList.length) {
                state.expensesList = [ ...state.expensesList, ...payload ]
            } else {
                state.expensesList = payload;
            }
        },
        clearExpensesList(state) {
            state.expensesList = [];
        }
    },
    extraReducers(builder) {
        builder.addCase(getExpensesListThunk.fulfilled, (state, action) => {
            if (state.expensesList.length) {
                state.expensesList = [ ...state.expensesList, ...action.payload.data ]
            } else {
                state.expensesList = action.payload.data;
            }
            state.totalExpenses = action.payload.total;
        })
    },
});

export const { actions: expensesActions, reducer: expensesReducer } = ExpensesSlice;