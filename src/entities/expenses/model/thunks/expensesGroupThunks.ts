import { createAsyncThunk } from "@reduxjs/toolkit";

import { getExpensesGroupByCategory } from "../../api/group";
import { GetExpensesGroupByCategoryParams } from '../../types/api';
import { GroupExpenses } from "../../types/expenses";
import { getExpenseAdapter } from "../../adapters/expense.adapter";

const getExpensesGroupByCategoryThunk = createAsyncThunk('expenses/total', async ({ startDate, endDate }: GetExpensesGroupByCategoryParams): Promise<GroupExpenses[]> => {
    
    const data = await getExpensesGroupByCategory(startDate, endDate);

    return data.reduce((expenses, groupExpense) => {
        expenses.push({ categoryId: groupExpense.category_id, totalAmount: Math.abs(groupExpense.category_total_amount), expenses: groupExpense.expenses.map(getExpenseAdapter) })
        return expenses;
    }, [] as GroupExpenses[]);
});

export {
    getExpensesGroupByCategoryThunk,
}