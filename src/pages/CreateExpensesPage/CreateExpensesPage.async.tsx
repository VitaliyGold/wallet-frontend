import { lazy } from "react";

const CreateExpensesPageAsync = lazy(() => import('./CreateExpensesPage').then(module => ({ default: module.CreateExpensesPage })));

export {
    CreateExpensesPageAsync,
}