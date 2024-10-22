import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStore, useAppDispatch } from "@/app";

import { ExpensesList } from "@/features/expensesList";
import { RemoveExpenses } from "@/features/removeExpenses";
import { ExpensesForm } from "@/features/expensesForm";
import {
	expensesListEntitiesSelector,
	totalExpensesSelector,
	getExpensesListThunk,
	filtersExpensesSelector,
	expensesActions,
	ExpensesCardActions,
	updateExpensesThunk,
} from "@/entities/expenses";
import type { Expenses } from "@/entities/expenses";
import { UiLoader, InfinityLoader, UiModal } from "@/shared/ui";
import { useSkipFirstRender } from "@/shared/lib/useSkipFirstRender";

import styles from "./styles.module.less";

const DetailExpenses = () => {
	const [isLoading, setLoading] = useState(true);

	const [offset, changeOffset] = useState(0);

	const [currentExpenseId, setCurrentExpenseId] = useState<string>("");

	const [currentModalMode, setCurrentModalMode] = useState<
		null | "edit" | "remove"
	>(null);

	const dispatch = useAppDispatch();

	const expensesList = useSelector(expensesListEntitiesSelector.selectAll);
	const totalExpenses = useSelector(totalExpensesSelector);

	const { endDate, startDate, expensesName, categoryIds } = useSelector(
		filtersExpensesSelector,
	);

	const currentExpense = useSelector((state: RootStore) =>
		expensesListEntitiesSelector.selectById(state, currentExpenseId),
	);

	useSkipFirstRender(() => {
		setLoading(true);
		dispatch(expensesActions.clearExpenses());
		if (!offset) {
			getData();
		} else {
			changeOffset(0);
		}
	}, [endDate, startDate, expensesName, categoryIds.length]);

	useEffect(() => {
		getData();
	}, [offset]);

	const getData = async () => {
		await dispatch(
			getExpensesListThunk({
				limit: 50,
				offset,
				name: expensesName,
				startDate,
				endDate,
				category_ids: categoryIds,
			}),
		).unwrap();
		setLoading(false);
	};

	useEffect(() => {
		return () => {
			dispatch(expensesActions.clearExpenses());
		};
	}, []);

	const getMoreData = () => {
		changeOffset(offset + 50);
	};

	const setDefaultMode = () => {
		setCurrentExpenseId("");
		setCurrentModalMode(null);
	};

	const startEdit = (expenseId: string) => {
		setCurrentModalMode("edit");
		setCurrentExpenseId(expenseId);
	};

	const startRemoved = (expenseId: string) => {
		setCurrentModalMode("remove");
		setCurrentExpenseId(expenseId);
	};

	const editData = async (expenses: Expenses) => {
		const oldExpense = { ...currentExpense };
		setDefaultMode();
		dispatch(expensesActions.patchExpense(expenses));
		try {
			await dispatch(updateExpensesThunk(expenses)).unwrap();
			// eslint-disable-next-line
        } catch(e) {
			dispatch(expensesActions.patchExpense(oldExpense));
		}
	};

	const haveMoreData =
		!!expensesList.length && expensesList.length !== totalExpenses;

	if (isLoading) {
		return <UiLoader />;
	}

	if (!totalExpenses) {
		return <div className={styles.emptyPlaceholder}>Нет трат</div>;
	}

	const getModalContent = () => {
		if (currentModalMode === "edit") {
			return (
				<ExpensesForm
					expense={currentExpense}
					closeCallback={setDefaultMode}
					saveCallback={editData}
				/>
			);
		}
		return (
			<RemoveExpenses
				currentExpense={currentExpense}
				onCancelCallback={setDefaultMode}
				onSuccessCallback={setDefaultMode}
			/>
		);
	};

	return (
		<div className={styles.detailExpenses}>
			<ExpensesList
				expensesList={expensesList}
				expenseControlPanel={(expenseId) => (
					<ExpensesCardActions
						removeAction={() => startRemoved(expenseId)}
						editAction={() => startEdit(expenseId)}
					/>
				)}
			/>
			<InfinityLoader
				condition={haveMoreData}
				getMoreCallback={getMoreData}
			/>
			{currentExpenseId && (
				<UiModal onHideCallback={setDefaultMode}>
					{getModalContent()}
				</UiModal>
			)}
		</div>
	);
};

export { DetailExpenses };
