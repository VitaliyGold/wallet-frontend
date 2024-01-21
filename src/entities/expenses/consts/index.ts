import { getMonthAgo, formatDateToFront } from "@/shared/lib/dateMethods";
import { ExpensesFilters } from "../types/expenses";

const defaultExpensesFilter = (): ExpensesFilters => {
    return {
        expensesName: '',
        startDate: formatDateToFront(getMonthAgo(new Date)),
        endDate: formatDateToFront(new Date()),
    }
};

export {
    defaultExpensesFilter,
}