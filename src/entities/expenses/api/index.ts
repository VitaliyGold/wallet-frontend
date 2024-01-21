import { GetExpenseApi, SetExpenseApi, RemoveExpenseApiResponse } from '../types/api';

import type { PaginationResponse } from '@/shared/types';

const getExpensesListApi = (name: string, limit: number, offset: number, startDate: string, endDate: string): Promise<PaginationResponse<GetExpenseApi[]>> => {
    const query = {
        name: name,
        limit: String(limit),
        offset: String(offset),
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
    }
    return fetch(import.meta.env.FRONTEND_API_URL + 'expenses?' + new URLSearchParams(query).toString(), {
        method: 'get',
        
    }).then(request => request.json());
}

const saveNewExpensesApi = (expenses: SetExpenseApi[]): Promise<GetExpenseApi[]> => {
    return fetch(import.meta.env.FRONTEND_API_URL + 'expenses', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(
            {
                data: expenses,
            }
        ) 
    }).then(request => request.json());
}

const removeExpensesApi = (expenseId: string): Promise<RemoveExpenseApiResponse> => {
    return fetch(import.meta.env.FRONTEND_API_URL + 'expenses?' + new URLSearchParams({ expenses_id: expenseId }).toString(), {
        method: 'delete',
        
    }).then(request => request.json());
}

export {
    getExpensesListApi,
    saveNewExpensesApi,
    removeExpensesApi
}