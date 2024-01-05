import { Expenses } from "../types/expenses";
import { GetExpenseApi } from '../types/api';
import { expenseAdapter } from "../adapters/expense.adapter";

const getExpensesListApi = async (): Promise<Expenses[]> => {
    const query = {
        name: '',
        limit: '50',
        offset: '0',
    }
    const data = await fetch(import.meta.env.FRONTEND_API_URL + 'expenses?' + new URLSearchParams(query).toString(), {
        method: 'get',
        
    }).then(request => request.json() as Promise<GetExpenseApi[]>);

    return data.map(expense => expenseAdapter(expense));

}

export {
    getExpensesListApi,
}