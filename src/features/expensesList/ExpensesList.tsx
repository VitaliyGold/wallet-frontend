import { FC, ReactNode } from 'react';

import type { Expenses } from '@/entities/expenses';
import { ExpensesCard } from '@/entities/expenses';


interface ExpensesListProps {
    expensesList: Expenses[];
    expenseControlPanel?: ReactNode;
}

const ExpensesList: FC<ExpensesListProps> = ({ expensesList, expenseControlPanel }) => {

    return (
        <div>
            { expensesList.map(expenses => <ExpensesCard key={expenses.expenseId} expenses={expenses} actionComponent={expenseControlPanel}/>) }
        </div>
    )
};

export {
    ExpensesList,
}