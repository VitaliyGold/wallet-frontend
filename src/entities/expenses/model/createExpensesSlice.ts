import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { Expenses } from "../types/expenses";

// TODO: позже можно будет сохранять траты в localStorage

const createExpensesAdapter = createEntityAdapter({
    selectId: (expenses: Expenses) => expenses.expenseId,
});

const CreateExpensesSlice = createSlice({
    name: 'createExpensesSlice',
    initialState: createExpensesAdapter.getInitialState({}),
    reducers: {
        addNewExpense: createExpensesAdapter.addOne,
        removeAllExpenses: createExpensesAdapter.removeAll,
        updateExpense: createExpensesAdapter.updateOne,
        removeExpense: createExpensesAdapter.removeOne,
    },
});
export const { actions: createExpensesActions, reducer: createExpensesReducer } = CreateExpensesSlice;
export {
    createExpensesAdapter
}