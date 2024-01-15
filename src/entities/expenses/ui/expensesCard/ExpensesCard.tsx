import type { FC, ReactNode } from "react";
import { memo } from "react";

import { getCuttingString } from "@/shared/lib/getCuttingString";

import styles from './styles.module.less';
import { Expenses } from "../../types/expenses"

interface ExpensesCardProps {
    expenses: Expenses;
    actionComponent?: ReactNode;
}

const ExpensesCard: FC<ExpensesCardProps> = memo(({ expenses, actionComponent = null }) => {
    return (
        <div className={styles.expensesCard}>
            
            { actionComponent && <div className={styles.actions}>{actionComponent}</div> }
            <p className={styles.name} title={expenses.expensesName}>
                { getCuttingString(expenses.expensesName, 40) }
            </p>
            <div className={styles.metaContainer}>
                <p className={styles.date}>{ expenses.spendingDate }</p>
                <p className={styles.amount}>{ expenses.amount } ₽</p>
            </div>
        </div>
    )
});

export {
    ExpensesCard,
}