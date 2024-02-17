interface Expenses {
    expenseId: string;
    expensesName: string;
    spendingDate: number;
    isHidden: boolean;
    amount: string;
    categoryIds: string[];
    tagIds: string[];
}

interface ExpensesFilters {
    endDate: string;
    startDate: string;
    expensesName: string;
}

export type {
    Expenses,
    ExpensesFilters,
}