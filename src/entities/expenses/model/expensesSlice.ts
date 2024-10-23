import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Expenses, ExpensesFilters } from "../types/expenses";
import { getExpensesListThunk } from "./thunks/expensesThunks";

import { defaultExpensesFilter } from "../consts";

const expensesAdapter = createEntityAdapter({
	selectId: (expenses: Expenses) => expenses.expenseId,
});

const ExpensesSlice = createSlice({
	name: "expensesSlice",
	initialState: expensesAdapter.getInitialState({
		totalExpenses: 0,
		isLoading: false,
		isError: false,
		filters: defaultExpensesFilter(),
	}),
	reducers: {
		addExpenses: expensesAdapter.addMany,
		clearExpenses(state) {
			expensesAdapter.removeAll(state);
			state.totalExpenses = 0;
		},
		setFilters(state, { payload }: PayloadAction<ExpensesFilters>) {
			state.filters = payload;
		},
		setDefaultFilter(state) {
			state.filters = defaultExpensesFilter();
		},
		removeById(state, { payload }: PayloadAction<string>) {
			expensesAdapter.removeOne(state, payload);
			state.totalExpenses -= 1;
		},
		patchExpense(state, { payload }: PayloadAction<Expenses>) {
			expensesAdapter.updateOne(state, {
				id: payload.expenseId,
				changes: payload,
			});
		},
	},
	extraReducers(builder) {
		builder.addCase(getExpensesListThunk.fulfilled, (state, action) => {
			expensesAdapter.addMany(state, action.payload.data);
			state.totalExpenses = action.payload.total;
			state.isLoading = false;
			state.isError = false;
		});
		builder.addCase(getExpensesListThunk.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(getExpensesListThunk.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export const { actions: expensesActions, reducer: expensesReducer } =
	ExpensesSlice;
export { expensesAdapter };
