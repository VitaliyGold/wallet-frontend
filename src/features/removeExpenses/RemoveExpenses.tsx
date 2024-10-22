import type { FC } from "react";

import { useAppDispatch } from "@/app";

import type { Expenses } from "@/entities/expenses";
import { expensesActions, removeExpensesThunk } from "@/entities/expenses";
import { UiButton, UiButtonsGroup } from "@/shared/ui";

import styles from "./styles.module.less";

interface RemoveExpensesProps {
	onCancelCallback: () => void;
	onSuccessCallback: () => void;
	currentExpense: Expenses;
}

const RemoveExpenses: FC<RemoveExpensesProps> = ({
	onCancelCallback,
	onSuccessCallback,
	currentExpense,
}) => {
	const dispatch = useAppDispatch();

	const removeQuery = async () => {
		const { payload } = dispatch(
			expensesActions.patchExpense({ ...currentExpense, isHidden: true }),
		);
		onSuccessCallback();
		try {
			await dispatch(removeExpensesThunk(payload.expenseId));
			dispatch(expensesActions.removeById(payload.expenseId));
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className={styles.removeExpenses}>
			<p>
				Вы действительно хотите удалить трату{" "}
				{currentExpense.expensesName}?
			</p>
			<UiButtonsGroup>
				<UiButton
					viewType="transparent"
					outline
					onClick={onCancelCallback}
				>
					Отмена
				</UiButton>
				<UiButton onClick={removeQuery}>Удалить</UiButton>
			</UiButtonsGroup>
		</div>
	);
};

export { RemoveExpenses };
