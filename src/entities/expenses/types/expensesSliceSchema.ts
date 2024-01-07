import type { Expenses } from "./expenses";

interface ExpensesSliceSchema {
    expensesList: Expenses[];
    totalExpenses: number;
}

export type {
    ExpensesSliceSchema,
}