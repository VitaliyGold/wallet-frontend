import { Expenses } from "@/entities/expenses";

type CreateExpenseFormData = Omit<Expenses, "expenseId">;

export type { CreateExpenseFormData };
