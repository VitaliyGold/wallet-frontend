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

    const getExpenseCard = (expenses: Expenses) => {
        if (expenses.isHidden) {
            return null;
        }
        return <ExpensesCard key={expenses.expenseId} expenses={expenses} actionComponent={expenseControlPanel && expenseControlPanel(expenses.expenseId)}/>
    }

    return (
        <div className={styles.expenseList}>
            <div className={styles.gridContainer}>
                { expensesList.map(getExpenseCard) }
                { lastListItem }
            </div>
        </div>
    )
};

export {
    ExpensesList,
}