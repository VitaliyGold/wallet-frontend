import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/app";
import type { RootStore } from "@/app";
import { ExpensesList } from "@/features/expensesList";
import {
	createExpensesStateSelector,
	createExpensesActions,
	Expenses,
	createExpensesThunk,
	ExpensesCardActions,
} from "@/entities/expenses";
import { UiLoader, UiModal } from "@/shared/ui";
import { ExpensesForm } from "@/features/expensesForm";

import { ActionsMenu } from "./ui/ActionsMenu/ActionsMenu";
import { AddNewExpenseCard } from "./ui/AddNewExpenseCard/AddNewExpenseCard";
import styles from "./styles.module.less";

const CreateExpenses = () => {
	const [isLoading, setLoading] = useState(false);

	const [editExpenseId, setEditExpenseId] = useState<string>("");

	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const createExpensesList = useSelector(
		createExpensesStateSelector.selectAll,
	);

	const editableExpense = useSelector((state: RootStore) =>
		createExpensesStateSelector.selectById(state, editExpenseId),
	);

	const goBackCallback = () => {
		dispatch(createExpensesActions.removeAllExpenses());
	};

	const saveExpenses = async () => {
		setLoading(true);
		try {
			await dispatch(createExpensesThunk(createExpensesList)).unwrap();
			navigate("/expenses");
			// eslint-disable-next-line
        } catch(e) {
			setLoading(false);
		}
	};

	const removeExpense = (expenseId: string) => {
		dispatch(createExpensesActions.removeExpense(expenseId));
		setEditExpenseId("");
	};

	const startEditExpense = (expenseId: string) => {
		setEditExpenseId(expenseId);
	};

	const editExpense = (expense: Expenses) => {
		dispatch(
			createExpensesActions.updateExpense({
				id: expense.expenseId,
				changes: expense,
			}),
		);
		setEditExpenseId("");
	};

	const onAddExpense = (expense: Expenses) => {
		dispatch(createExpensesActions.addNewExpense(expense));
	};

	if (isLoading) {
		return <UiLoader />;
	}

	return (
		<div className={styles.createExpenses}>
			<ActionsMenu
				disabledSave={!createExpensesList.length}
				saveExpensesCallback={saveExpenses}
				goBackCallback={goBackCallback}
			/>
			<ExpensesList
				expensesList={createExpensesList}
				lastListItem={
					<AddNewExpenseCard addNewExpense={onAddExpense} />
				}
				expenseControlPanel={(expenseId) => (
					<ExpensesCardActions
						removeAction={() => removeExpense(expenseId)}
						editAction={() => startEditExpense(expenseId)}
					/>
				)}
			/>
			{editExpenseId && (
				<UiModal onHideCallback={() => setEditExpenseId("")}>
					<ExpensesForm
						expense={editableExpense}
						saveCallback={editExpense}
						closeCallback={() => setEditExpenseId("")}
					/>
				</UiModal>
			)}
		</div>
	);
};

export { CreateExpenses };
