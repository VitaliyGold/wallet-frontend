import type { ExpensesFilters } from "@/entities/expenses";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app";

import {
	isLoadingExpensesSelector,
	getExpensesListThunk,
} from "@/entities/expenses";

export const useGetData = ({
	expensesName,
	endDate,
	startDate,
	categoryIds,
}: ExpensesFilters) => {
	const dispatch = useAppDispatch();

	const [offset, changeOffset] = useState(0);

	useEffect(() => {
		getData();
	}, [expensesName, endDate, startDate, categoryIds, offset]);

	const isExpensesLoading = useSelector(isLoadingExpensesSelector);

	const isLoadingMore = !!offset && isExpensesLoading;

	const getData = () =>
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

	return {
		isLoading: isExpensesLoading,
		isLoadingMore,
		changeOffset: () => changeOffset(offset + 50),
	};
};
