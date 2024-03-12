import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetExpenseRequestParams } from '../../types/api';
import { getExpenseAdapter, createExpenseAdapter, updateExpenseAdapter } from "../../adapters/expense.adapter";
import type { PaginationResponse } from '@/shared/types';
import { Expenses } from "../../types/expenses";

import { getExpensesListApi, saveNewExpensesApi, removeExpensesApi, editExpensesApi } from "../../api/expenses";

const getExpensesListThunk = createAsyncThunk('expenses/list', async ({ limit, offset, name, startDate, endDate, categoryIds }: GetExpenseRequestParams ): Promise<PaginationResponse<Expenses[]>> => {
    const { data, total } = await getExpensesListApi(name, limit, offset, startDate, endDate, categoryIds);
    return {
        data: data.map(expense => getExpenseAdapter(expense)),
        total,
    }
});

const createExpensesThunk = createAsyncThunk('expenses/create', async (expenses: Expenses[]): Promise<Expenses[]> => {
    const createdExpenses = expenses.map(expense => createExpenseAdapter(expense));

    const data = await saveNewExpensesApi(createdExpenses);

    return data.map(expense => getExpenseAdapter(expense));
})

const removeExpensesThunk = createAsyncThunk('expenses/remove', async (expenseId: string): Promise<Expenses> => {
    const data = await removeExpensesApi(expenseId);
    return getExpenseAdapter(data);
})

const updateExpensesThunk = createAsyncThunk('expenses/edit', async (expenses: Expenses): Promise<Expenses> => {
    const updatedExpense = updateExpenseAdapter(expenses);
    const data = await editExpensesApi(updatedExpense);
    return getExpenseAdapter(data);
})

export {
    getExpensesListThunk,
    createExpensesThunk,
    removeExpensesThunk,
    updateExpensesThunk,
}
