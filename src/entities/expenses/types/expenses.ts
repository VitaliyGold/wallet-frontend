interface Expenses {
    expenseId: string;
    expensesName: string;
    spendingDate: number;
    isHidden: boolean;
    amount: string;
    categoryIds: string[];
    tagIds: string[];
    expenseDirection: 'incomes' | 'expenses';
}

type ExpenseDirection = 'incomes' | 'expenses';

interface ExpensesFilters {
    endDate: number;
    startDate: number;
    expensesName: string;
    categoryIds: string[];
}

export type {
    Expenses,
    ExpensesFilters,
    ExpenseDirection,
}