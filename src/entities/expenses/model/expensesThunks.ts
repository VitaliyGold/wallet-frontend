import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetExpenseRequestParams } from '../types/api';
import { getExpenseAdapter, createExpenseAdapter } from "../adapters/expense.adapter";
import type { PaginationResponse } from '@/shared/types';
import { Expenses } from "../types/expenses";

import { getExpensesListApi, saveNewExpensesApi } from "../api";

const getExpensesListThunk = createAsyncThunk('expenses/fetchList', async ({ limit, offset, name }: GetExpenseRequestParams ): Promise<PaginationResponse<Expenses[]>> => {
    const { data, total } = await getExpensesListApi(name, limit, offset);
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

export {
    getExpensesListThunk,
    createExpensesThunk,
}
