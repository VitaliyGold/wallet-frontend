import type { FC, ReactNode } from "react";
import cn from "classnames";

import { getCuttingString } from "@/shared/lib/getCuttingString";

import styles from "./styles.module.less";
import { Expenses } from "../../types/expenses";

import { formatDateToFront } from "@/shared/lib/dateMethods";

interface ExpensesCardProps {
	expenses: Expenses;
	actionComponent?: ReactNode;
	labelsComponent?: ReactNode;
}

const ExpensesCard: FC<ExpensesCardProps> = ({
	expenses,
	actionComponent = null,
	labelsComponent = null,
}) => {
	return (
		<div className={styles.expensesCard}>
			{actionComponent && (
				<div className={styles.actions}>{actionComponent}</div>
			)}
			<p className={styles.name} title={expenses.expensesName}>
				{getCuttingString(expenses.expensesName, 40)}
			</p>
			<div className={styles.metaContainer}>
				<p className={styles.date}>
					{formatDateToFront(expenses.spendingDate)}
				</p>
				<p
					className={cn(
						styles.amount,
						expenses.amountDirection === "incomes"
							? styles.incomes
							: styles.expenses,
					)}
				>
					{expenses.amount} ₽
				</p>
			</div>
			{labelsComponent && (
				<div className={styles.labels}>{labelsComponent}</div>
			)}
		</div>
	);
};

export { ExpensesCard };
