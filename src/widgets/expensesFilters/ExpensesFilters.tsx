import { useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { useForm, useWatch } from "react-hook-form";

import { useAppDispatch } from "@/app";
import { ExpensesActionsPanel } from "@/features/expensesActionsPanel";
import {
	filtersExpensesSelector,
	expensesActions,
	defaultExpensesFilter,
} from "@/entities/expenses";
import type { ExpensesFilters } from "@/entities/expenses";
import { debounce } from "@/shared/lib/debounce";

import { FiltersList } from "./ui/FiltersList/FiltersList";
import styles from "./styles.module.less";

const ExpensesFilter = () => {
	const dispatch = useAppDispatch();

	const filters = useSelector(filtersExpensesSelector);

	const onSubmitFilters = (newFilters: ExpensesFilters) => {
		dispatch(expensesActions.setFilters(newFilters));
	};

	const { register, handleSubmit, control, reset } = useForm<ExpensesFilters>(
		{
			defaultValues: filters,
		},
	);

	const onChangeFilters = handleSubmit(onSubmitFilters);

	const onChangeDebouncedFilters = useCallback(
		debounce(onChangeFilters, 500),
		[],
	);

	const expensesFilters = useWatch<ExpensesFilters>({
		name: ["categoryIds", "startDate", "endDate", "expensesName"],
		control,
	});

	const onReset = () => {
		reset();
	};

	useEffect(() => {
		return () => onSubmitFilters(defaultExpensesFilter());
	}, []);

	useEffect(() => {
		onChangeDebouncedFilters();
	}, [expensesFilters]);

	return (
		<ExpensesActionsPanel>
			<form className={styles.filterForm} onReset={onReset}>
				<FiltersList control={control} register={register} />
			</form>
		</ExpensesActionsPanel>
	);
};

export { ExpensesFilter };
