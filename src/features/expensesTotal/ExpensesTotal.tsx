import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/app";
import {
	filtersExpensesSelector,
	getExpensesTotalThunk,
} from "@/entities/expenses";
import { UiLoader, UiText } from "@/shared/ui";
import { formatDateToFront } from "@/shared/lib/dateMethods";

import styles from "./styles.module.less";

const ExpensesTotal = () => {
	const [totalAmount, setTotalAmount] = useState(0);
	const [isLoading, setLoading] = useState(true);

	const dispatch = useAppDispatch();

	const { endDate, startDate, expensesName, categoryIds } = useSelector(
		filtersExpensesSelector,
	);

	useEffect(() => {
		getExpensesTotal();
	}, [endDate, startDate, expensesName, categoryIds.length]);

	const getExpensesTotal = async () => {
		setLoading(true);
		const total = await dispatch(
			getExpensesTotalThunk({
				name: expensesName,
				startDate,
				endDate,
				category_ids: categoryIds,
			}),
		).unwrap();
		setLoading(false);
		setTotalAmount(total);
	};

	const getContent = () => {
		return (
			<div className={styles.content}>
				<UiText size="l">
					Баланс нас период c {formatDateToFront(startDate)} по{" "}
					{formatDateToFront(endDate)}:
				</UiText>
				<UiText size="xl" color="red">
					{totalAmount} ₽
				</UiText>
			</div>
		);
	};

	return (
		<div className={styles.expensesTotal}>
			{isLoading ? <UiLoader size={24} /> : getContent()}
		</div>
	);
};

export { ExpensesTotal };
