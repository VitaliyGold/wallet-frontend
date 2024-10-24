import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootStore } from "@/app";
import { useAppDispatch } from "@/app";

import { RemoveExpenses } from "@/features/removeExpenses";
import { ExpensesForm } from "@/features/expensesForm";
import {
	expensesActions,
	expensesListEntitiesSelector,
	updateExpensesThunk,
	ExpensesCardActions,
} from "@/entities/expenses";
import type { Expenses } from "@/entities/expenses";
import { UiModal } from "@/shared/ui";

const EDIT_MOD = "edit";
const REMOVE_MOD = "remove";

type ModalMode = null | typeof EDIT_MOD | typeof REMOVE_MOD;

export const useChangeExpenses = () => {
	const dispatch = useAppDispatch();

	const [currentExpenseId, setCurrentExpenseId] = useState<string>("");

	const [currentModalMode, setCurrentModalMode] = useState<ModalMode>(null);

	const currentExpense = useSelector((state: RootStore) =>
		expensesListEntitiesSelector.selectById(state, currentExpenseId),
	);

	const setDefaultMode = () => {
		setCurrentExpenseId("");
		setCurrentModalMode(null);
	};

	const startEdit = (expenseId: string) => {
		setCurrentModalMode(EDIT_MOD);
		setCurrentExpenseId(expenseId);
	};

	const startRemoved = (expenseId: string) => {
		setCurrentModalMode(REMOVE_MOD);
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

	const ChangeExpenseModal = () => {
		if (currentExpenseId && currentModalMode) {
			return (
				<UiModal>
					{currentModalMode === EDIT_MOD ? (
						<ExpensesForm
							expense={currentExpense}
							closeCallback={setDefaultMode}
							saveCallback={editData}
						/>
					) : (
						<RemoveExpenses
							currentExpense={currentExpense}
							onCancelCallback={setDefaultMode}
							onSuccessCallback={setDefaultMode}
						/>
					)}
				</UiModal>
			);
		}
		return null;
	};

	const ExpenseControlPanel = (expenseId: string) => (
		<ExpensesCardActions
			removeAction={() => startRemoved(expenseId)}
			editAction={() => startEdit(expenseId)}
		/>
	);

	return {
		ChangeExpenseModal,
		ExpenseControlPanel,
	};
};
