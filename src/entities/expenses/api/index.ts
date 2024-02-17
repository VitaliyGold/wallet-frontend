import { GetExpenseApi, SetExpenseApi, RemoveExpenseApiResponse } from '../types/api';

import type { PaginationResponse } from '@/shared/types';
import { fetcher } from '@/shared/lib/fetcher';

const getExpensesListApi = (name: string, limit: number, offset: number, startDate: string, endDate: string): Promise<PaginationResponse<GetExpenseApi[]>> => {
    const query = {
        name: name,
        limit: String(limit),
        offset: String(offset),
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
    }
    return fetcher.get('expenses', query);
}

const saveNewExpensesApi = (expenses: SetExpenseApi[]): Promise<GetExpenseApi[]> => {
    return fetcher.post('expenses', expenses);
}

const removeExpensesApi = (expenseId: string): Promise<RemoveExpenseApiResponse> => {
    return fetcher.delete('expenses', { expenses_id: expenseId })
}

const editExpensesApi = (updatedExpense: SetExpenseApi): Promise<GetExpenseApi> => {
    return fetcher.update('expenses', updatedExpense);
}

export {
    getExpensesListApi,
    saveNewExpensesApi,
    editExpensesApi,
    removeExpensesApi
}