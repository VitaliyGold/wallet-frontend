import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExpensesSliceSchema } from "../types/expensesSliceSchema";
import { Expenses } from "../types/expenses";

const initialState: ExpensesSliceSchema = {
    expensesList: [
        {
            expensesName: 'траты на кота',
            spendingDate: new Date().toISOString(),
            amount: 20,
            categoryIds: ['555'],
            tagIds: ['6666'],
            expenseId: crypto.randomUUID(),
        }
    ],
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
        }
    }
});

export const { actions: expensesActions, reducer: expensesReducer } = ExpensesSlice;