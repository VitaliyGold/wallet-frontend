import { GetExpenseApi, SetExpenseApi, RemoveExpenseApiResponse, UpdateExpenseApi } from "../types/api"
import { Expenses } from "../types/expenses"

const getExpenseAdapter = (data: GetExpenseApi | RemoveExpenseApiResponse | {} = {}): Expenses => {
    const expense = data as GetExpenseApi;
    return {
        expenseId: expense?.expenses_id ?? crypto.randomUUID(),
        expensesName: expense.name ?? '',
        spendingDate: expense.date ? new Date(expense.date).getTime() : new Date().getTime(),
        amount: expense.amount ? String(Math.abs(expense.amount)) : '',
        categoryIds: expense.category ? expense.category.map((categoryItem) => categoryItem.category_id) : [],
        tagIds: expense.tags ? expense.tags.map((tag) => tag.tag_id) : [],
        isHidden: false,
        expenseDirection: expense.amount < 0 ? 'expenses' : 'incomes',
    }
}

const createExpenseAdapter = (expense: Expenses): SetExpenseApi => {
    return {
        amount: expense.expenseDirection === 'incomes' ? Number(expense.amount) : -Number(expense.amount),
        date: new Date(expense.spendingDate).toISOString(),
        name: expense.expensesName,
        categories: expense.categoryIds,
        tags: expense.tagIds,
    }
}

const updateExpenseAdapter = (expense: Expenses): UpdateExpenseApi => {
    return {
        ...createExpenseAdapter(expense),
        expenses_id: expense.expenseId
    }
}

export {
    getExpenseAdapter,
    createExpenseAdapter,
    updateExpenseAdapter,
}