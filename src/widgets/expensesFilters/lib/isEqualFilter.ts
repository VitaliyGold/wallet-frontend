import type { ExpensesFilters } from "@/entities/expenses";

const isEqualFilter = (oldValue: ExpensesFilters, newValue: ExpensesFilters): boolean => {
    return JSON.stringify(oldValue).toLocaleLowerCase() === JSON.stringify(newValue).toLocaleLowerCase();
}

export {
    isEqualFilter
}