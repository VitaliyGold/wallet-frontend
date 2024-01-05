import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExpensesSliceSchema } from "../types/expensesSliceSchema";
import { Expenses } from "../types/expenses";
import { getExpensesListThunk } from "./expensesThunks";

const initialState: ExpensesSliceSchema = {
    expensesList: [],
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
                state.expensesList = [ ...state.expensesList, ...action.payload ]
            } else {
                state.expensesList = action.payload;
            }
        })
    },
});

export const { actions: expensesActions, reducer: expensesReducer } = ExpensesSlice;