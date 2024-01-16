
import { EntityState } from "@reduxjs/toolkit";
import type { Expenses } from "./expenses";

interface ExpensesSliceSchema {
    expensesList: EntityState<Expenses, string>;
    totalExpenses: number;
}

interface CreateExpensesSliceSchema {
    newExpensesList: Expenses[];
}

export type {
    ExpensesSliceSchema,
    CreateExpensesSliceSchema,
}