interface Expenses {
    expenseId: string;
    expensesName: string;
    spendingDate: number;
    isHidden: boolean;
    amount: string;
    categoryIds: string[];
    tagIds: string[];
    amountDirection: 'incomes' | 'expenses';
}

type AmountDirection = 'incomes' | 'expenses';

interface ExpensesFilters {
    endDate: number;
    startDate: number;
    expensesName: string;
    categoryIds: string[];
}

export type {
    Expenses,
    ExpensesFilters,
    AmountDirection,
}