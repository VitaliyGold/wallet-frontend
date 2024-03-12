import type { ExpensesFilters } from "@/entities/expenses";

const isEqualFilter = (oldValue: ExpensesFilters, newValue: ExpensesFilters): boolean => {
    return JSON.stringify(oldValue) === JSON.stringify(newValue);
}

export {
    isEqualFilter
}