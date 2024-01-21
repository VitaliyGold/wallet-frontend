import { GetExpenseApi, SetExpenseApi, RemoveExpenseApiResponse } from "../types/api"
import { Expenses } from "../types/expenses"

const getExpenseAdapter = (data: GetExpenseApi | RemoveExpenseApiResponse | {} = {}): Expenses => {
    const expense = data as GetExpenseApi;

    return {
        expenseId: expense?.expenses_id ?? crypto.randomUUID(),
        expensesName: expense.name ?? '',
        spendingDate: expense.date ? new Date(expense.date).toLocaleDateString() : new Date().toLocaleDateString(),
        amount: expense.amount ? String(expense.amount) : '',
        categoryIds: expense.category ? expense.category.map((categoryItem) => categoryItem.category_id) : [],
        tagIds: expense.tags ? expense.tags.map((tag) => tag.tag_id) : [],
        isHidden: false,
    }
}

const createExpenseAdapter = (expense: Expenses): SetExpenseApi => {
    return {
        amount: Number(expense.amount),
        date: new Date(expense.spendingDate).toISOString(),
        name: expense.expensesName,
        categories: expense.categoryIds,
        tags: expense.tagIds,
    }
}

export {
    getExpenseAdapter,
    createExpenseAdapter,
}