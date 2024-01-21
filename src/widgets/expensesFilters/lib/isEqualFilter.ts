import type { ExpensesFilters } from "@/entities/expenses";

const isEqualFilter = (oldValue: ExpensesFilters, newValue: ExpensesFilters): boolean => {
    for (const i in oldValue) {
        const key = i as keyof ExpensesFilters;
        if (!newValue[key as keyof ExpensesFilters] || newValue[key].toLowerCase() !== oldValue[key].toLowerCase()) return false
    }

    return true
}

export {
    isEqualFilter
}