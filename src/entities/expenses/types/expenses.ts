interface Expenses {
    expensesName: string;
    spendingDate: string;
    amount: number;
    categoryIds: string[];
    tagIds: string[];
}

export type {
    Expenses,
}