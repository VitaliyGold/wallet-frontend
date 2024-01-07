import { Expenses } from "../types/expenses";
import { GetExpenseApi } from '../types/api';
import { expenseAdapter } from "../adapters/expense.adapter";

import type { PaginationResponse } from '@/shared/types';

const getExpensesListApi = async (name: string, limit: number, offset: number): Promise<PaginationResponse<GetExpenseApi[]>> => {
    const query = {
        name: '',
        limit: String(limit),
        offset: String(offset),
    }
    const response = await fetch(import.meta.env.FRONTEND_API_URL + 'expenses?' + new URLSearchParams(query).toString(), {
        method: 'get',
        
    }).then(request => request.json());

    return response;

}

export {
    getExpensesListApi,
}