import { GetExpenseApi, SetExpenseApi } from "../types/api"
import { Expenses } from "../types/expenses"

const getExpenseAdapter = ({ expenses_id, name, date, amount, category, tags } = {} as GetExpenseApi): Expenses => {
    return {
        expenseId: expenses_id ?? crypto.randomUUID(),
        expensesName: name ?? '',
        spendingDate: date ? new Date(date).toLocaleDateString() : new Date().toLocaleDateString(),
        amount: amount ? String(amount) : '',
        categoryIds: category ? category.map((categoryItem) => categoryItem.category_id) : [],
        tagIds: tags ? tags.map((tag) => tag.tag_id) : []
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