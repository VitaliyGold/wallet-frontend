import { ExpenseApiWithCategoryAndTags, SetExpenseApi, RemoveExpenseApiResponse, UpdateExpenseApi } from "../types/api"
import { Expenses } from "../types/expenses"

const getExpenseAdapter = (data: ExpenseApiWithCategoryAndTags | RemoveExpenseApiResponse | {} = {}): Expenses => {
    const expense = data as ExpenseApiWithCategoryAndTags;
    return {
        expenseId: expense?.expenses_id ?? crypto.randomUUID(),
        expensesName: expense.name ?? '',
        spendingDate: expense.date ? new Date(expense.date).getTime() : new Date().getTime(),
        amount: expense.amount ? String(Math.abs(expense.amount)) : '',
        categoryId: expense.category_id ?? null,
        tagId: expense.tag_id ?? null,
        isHidden: false,
        amountDirection: expense.amount < 0 ? 'expenses' : 'incomes',
    }
}

const createExpenseAdapter = (expense: Expenses): SetExpenseApi => {
    return {
        amount: expense.amountDirection === 'incomes' ? Number(expense.amount) : -Number(expense.amount),
        date: new Date(expense.spendingDate).toISOString(),
        name: expense.expensesName,
        category_id: expense.categoryId,
        tag_id: expense.tagId,
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