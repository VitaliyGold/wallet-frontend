import { GetExpenseApi, SetExpenseApi, RemoveExpenseApiResponse } from '../types/api';

import type { PaginationResponse } from '@/shared/types';
import { request } from 'http';

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
        
    }).then(response => response.json());
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
    }).then(response => response.json());
}

const removeExpensesApi = (expenseId: string): Promise<RemoveExpenseApiResponse> => {
    return fetch(import.meta.env.FRONTEND_API_URL + 'expenses?' + new URLSearchParams({ expenses_id: expenseId }).toString(), {
        method: 'delete',
        
    }).then(response => response.json());
}

const editExpensesApi = (updatedExpense: SetExpenseApi): Promise<GetExpenseApi> => {
    return fetch(import.meta.env.FRONTEND_API_URL + 'expenses', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            data: updatedExpense
        })
    })
    .then(response => response.json())
    .catch(response => {
        console.log(response)
        throw response;
    });
}

export {
    getExpensesListApi,
    saveNewExpensesApi,
    editExpensesApi,
    removeExpensesApi
}