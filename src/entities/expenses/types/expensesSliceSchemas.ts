import type { Expenses } from "./expenses";

interface ExpensesSliceSchema {
    expensesList: Expenses[];
    totalExpenses: number;
}

interface CreateExpensesSliceSchema {
    newExpensesList: Expenses[];
}

export type {
    ExpensesSliceSchema,
    CreateExpensesSliceSchema,
}