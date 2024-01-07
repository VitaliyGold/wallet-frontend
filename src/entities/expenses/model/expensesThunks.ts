import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetExpenseRequestParams } from '../types/api';
import { expenseAdapter } from "../adapters/expense.adapter";
import type { PaginationResponse } from '@/shared/types';
import { Expenses } from "../types/expenses";

import { getExpensesListApi } from "../api";

const getExpensesListThunk = createAsyncThunk('expenses/fetchList', async ({ limit, offset, name }: GetExpenseRequestParams ): Promise<PaginationResponse<Expenses[]>> => {
    const { data, total } = await getExpensesListApi(name, limit, offset);
    return {
        data: data.map(expense => expenseAdapter(expense)),
        total,
    }
});

export {
    getExpensesListThunk,
}
