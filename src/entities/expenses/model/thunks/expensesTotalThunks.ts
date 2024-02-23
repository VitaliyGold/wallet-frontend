import { createAsyncThunk } from "@reduxjs/toolkit";
import { getExpensesTotalApi } from "../../api/total";

import { GetTotalExpensesRequestParams } from '../../types/api';

const getExpensesTotalThunk = createAsyncThunk('expenses/total', async ({ name, startDate, endDate }: GetTotalExpensesRequestParams): Promise<number> => {
    const { total } = await getExpensesTotalApi(name, startDate, endDate);

    return total;
});

export {
    getExpensesTotalThunk,
}