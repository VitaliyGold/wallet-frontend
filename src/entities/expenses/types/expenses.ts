interface Expenses {
    expenseId: string;
    expensesName: string;
    spendingDate: string;
    amount: string;
    categoryIds: string[];
    tagIds: string[];
}

export type {
    Expenses,
}