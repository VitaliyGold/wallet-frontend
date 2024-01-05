import { GetExpenseApi } from "../types/api"
import { Expenses } from "../types/expenses"

const expenseAdapter = ({ expenses_id, name, date, amount, category, tags }: GetExpenseApi): Expenses => {
    return {
        expenseId: expenses_id,
        expensesName: name,
        spendingDate: date,
        amount,
        categoryIds: category.map((categoryItem) => categoryItem.category_id),
        tagIds: tags.map((tag) => tag.tag_id)
    }
}

export {
    expenseAdapter,
}