interface Expenses {
	expenseId: string;
	expensesName: string;
	spendingDate: number;
	isHidden: boolean;
	amount: string;
	// поменять, категория у траты может быть только одна
	categoryId: string | null;
	tagId: string | null;
	amountDirection: "incomes" | "expenses";
}

type GroupExpenses = {
	categoryId: string;
	totalAmount: number;
	expenses: Expenses[];
};

type AmountDirection = "incomes" | "expenses";

interface ExpensesFilters {
	endDate: number;
	startDate: number;
	expensesName: string;
	categoryIds: string[];
}

export type { Expenses, ExpensesFilters, AmountDirection, GroupExpenses };
