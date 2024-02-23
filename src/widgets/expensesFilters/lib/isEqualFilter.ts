import type { ExpensesFilters } from "@/entities/expenses";

const isEqualFilter = (oldValue: ExpensesFilters, newValue: ExpensesFilters): boolean => {
    for (const i in oldValue) {
        const key = i as keyof ExpensesFilters;
        if (!newValue[key as keyof ExpensesFilters]) return false;
        if (typeof newValue[key] === 'number') {
            return newValue[key] === oldValue[key];
        } else if (typeof newValue[key] === 'string') {
            return (newValue[key] as string).toLowerCase() === (oldValue[key] as string).toLowerCase();
        }
    }

    return true
}

export {
    isEqualFilter
}