import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/app";
import type { ExpensesFilters } from "@/entities/expenses";
import {
	isLoadingExpensesSelector,
	getExpensesListThunk,
	expensesActions,
} from "@/entities/expenses";

export const useGetData = ({
	expensesName,
	endDate,
	startDate,
	categoryIds,
}: ExpensesFilters) => {
	const dispatch = useAppDispatch();

	const [offset, changeOffset] = useState(0);

	const getData = () => {
		dispatch(
			getExpensesListThunk({
				limit: 50,
				offset,
				name: expensesName,
				startDate,
				endDate,
				category_ids: categoryIds,
			}),
		);
	};

	const onFilterChange = () => {
		changeOffset(0);
		dispatch(expensesActions.clearExpenses());
		getData();
	};

	const getMoreData = () => {
		changeOffset(offset + 50);
		getData();
	};

	useEffect(() => {
		onFilterChange();
	}, [expensesName, endDate, startDate, JSON.stringify(categoryIds)]);

	const isExpensesLoading = useSelector(isLoadingExpensesSelector);

	const isLoadingMore = !!offset && isExpensesLoading;

	return {
		isLoading: isExpensesLoading,
		isLoadingMore,
		getMoreData,
	};
};
