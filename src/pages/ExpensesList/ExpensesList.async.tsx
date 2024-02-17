import { lazy } from "react";

const ExpensesListPageAsync = lazy(() => import('./ExpensesList').then(module => ({ default: module.ExpensesListPage })));

export {
    ExpensesListPageAsync,
}