import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetExpenseRequestParams } from '../types/api';

import { getExpensesListApi } from "../api";

const getExpensesListThunk = createAsyncThunk('expenses/fetchList', async ({ limit, offset, name }: GetExpenseRequestParams ) => {
    console.log(limit, offset, name);
    return getExpensesListApi();
});

export {
    getExpensesListThunk,
}