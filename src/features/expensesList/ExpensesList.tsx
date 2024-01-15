import { FC, ReactNode } from 'react';

import type { Expenses } from '@/entities/expenses';
import { ExpensesCard } from '@/entities/expenses';

import styles from './styles.module.less';
interface ExpensesListProps {
    expensesList: Expenses[];
    expenseControlPanel?: (expenseId: string) => ReactNode;
    lastListItem?: ReactNode;
}

const ExpensesList: FC<ExpensesListProps> = ({ expensesList, expenseControlPanel, lastListItem = null }) => {

    return (
        <div className={styles.expenseList}>
            { expensesList.map(expenses => <ExpensesCard key={expenses.expenseId} expenses={expenses} actionComponent={expenseControlPanel && expenseControlPanel(expenses.expenseId)}/>) }
            { lastListItem }
        </div>
    )
};

export {
    ExpensesList,
}