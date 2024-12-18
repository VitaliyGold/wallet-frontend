import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";

import type { Expenses } from "@/entities/expenses";
import { ExpensesCard } from "@/entities/expenses";
import { CategoryLabel, categoryListSelector } from "@/entities/category";

import styles from "./styles.module.less";

interface ExpensesListProps {
	expensesList: Expenses[];
	expenseControlPanel?: (expenseId: string) => ReactNode;
	lastListItem?: ReactNode;
}

const ExpensesList: FC<ExpensesListProps> = ({
	expensesList,
	expenseControlPanel,
	lastListItem = null,
}) => {
	const categoryDict = useSelector(categoryListSelector.selectEntities);

	const getCategoryLabels = (categoryId: string) => {
		return (
			<CategoryLabel
				key={categoryId}
				color={categoryDict[categoryId].color}
				outline={true}
			>
				{" "}
				{categoryDict[categoryId]?.name ?? "Нет имени"}{" "}
			</CategoryLabel>
		);
	};

	const getExpenseCard = (expenses: Expenses) => {
		if (expenses.isHidden) {
			return null;
		}
		return (
			<ExpensesCard
				key={expenses.expenseId}
				expenses={expenses}
				actionComponent={
					expenseControlPanel &&
					expenseControlPanel(expenses.expenseId)
				}
				labelsComponent={
					expenses.categoryId
						? getCategoryLabels(expenses.categoryId)
						: null
				}
			/>
		);
	};

	return (
		<div className={styles.expenseList}>
			<div className={styles.gridContainer}>
				{expensesList.map(getExpenseCard)}
				{lastListItem}
			</div>
		</div>
	);
};

export { ExpensesList };
