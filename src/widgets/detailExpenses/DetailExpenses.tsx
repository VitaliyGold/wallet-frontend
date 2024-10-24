import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app";

import { ExpensesList } from "@/features/expensesList";
import {
	expensesListEntitiesSelector,
	totalExpensesSelector,
	filtersExpensesSelector,
	expensesActions,
	defaultExpensesFilter,
	isLoadingExpensesSelector,
} from "@/entities/expenses";
import { UiLoader, InfinityLoader } from "@/shared/ui";
// перенести на уровень хелперов
import { isEqualFilter } from "@/widgets/expensesFilters/lib/isEqualFilter";

import styles from "./styles.module.less";
import { EmptyPlaceholder } from "./EmptyPlaceholder";
import { useGetData } from "./hooks/useGetData";
import { useChangeExpenses } from "./hooks/useChangeExpenses";

const DetailExpenses = () => {
	const isExpensesLoading = useSelector(isLoadingExpensesSelector);

	const dispatch = useAppDispatch();

	const expensesList = useSelector(expensesListEntitiesSelector.selectAll);
	const totalExpenses = useSelector(totalExpensesSelector);

	const expensesFilter = useSelector(filtersExpensesSelector);

	const { expensesName, endDate, startDate, categoryIds } = expensesFilter;

	const { isLoading, isLoadingMore, getMoreData } = useGetData({
		expensesName,
		endDate,
		startDate,
		categoryIds,
	});

	const { ChangeExpenseModal, ExpenseControlPanel } = useChangeExpenses();

	const isFilterNotDefault =
		!isExpensesLoading &&
		!isEqualFilter(expensesFilter, defaultExpensesFilter());

	useEffect(() => {
		return () => {
			dispatch(expensesActions.clearExpenses());
		};
	}, []);

	if (isLoading) {
		return <UiLoader />;
	}

	if (!totalExpenses) {
		return <EmptyPlaceholder hasFilters={isFilterNotDefault} />;
	}

	return (
		<div className={styles.detailExpenses}>
			<ExpensesList
				expensesList={expensesList}
				expenseControlPanel={ExpenseControlPanel}
			/>
			<InfinityLoader
				isLoading={isLoadingMore}
				hasMoreData={isLoadingMore}
				getMoreCallback={getMoreData}
			/>
			<ChangeExpenseModal />
		</div>
	);
};

export { DetailExpenses };
