import { GetExpenseApi, SetExpenseApi } from '../types/api';

import type { PaginationResponse } from '@/shared/types';

const getExpensesListApi = async (name: string, limit: number, offset: number): Promise<PaginationResponse<GetExpenseApi[]>> => {
    const query = {
        name: '',
        limit: String(limit),
        offset: String(offset),
    }
    return fetch(import.meta.env.FRONTEND_API_URL + 'expenses?' + new URLSearchParams(query).toString(), {
        method: 'get',
        
    }).then(request => request.json());
}

const saveNewExpensesApi = async (expenses: SetExpenseApi[]): Promise<GetExpenseApi[]> => {
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

export {
    getExpensesListApi,
    saveNewExpensesApi,
}