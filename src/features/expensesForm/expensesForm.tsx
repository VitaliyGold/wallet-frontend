import type { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import type { Expenses } from "@/entities/expenses";
import { getExpenseAdapter } from "@/entities/expenses";
import {
	UiInput,
	UiButton,
	UiButtonsGroup,
	MaskedUiInput,
	UiDatePicker,
	UiRadioGroup,
} from "@/shared/ui";
import { CategorySelect } from "@/entities/category";

import type { CreateExpenseFormData } from "./types";
import { options } from "./contants";
import styles from "./styles.module.less";

interface ExpensesFormProps {
	expense?: Expenses;
	closeCallback: () => void;
	saveCallback: (expense: Expenses) => void;
}

const ExpensesForm: FC<ExpensesFormProps> = ({
	expense,
	closeCallback,
	saveCallback,
}) => {
	const isEdit = !!expense;
	// TODO: убрать/заменить
	const defaultExpenseData = isEdit ? expense : getExpenseAdapter();

	const { register, handleSubmit, control, reset } =
		useForm<CreateExpenseFormData>({ defaultValues: defaultExpenseData });

	const clearForm = () => {
		reset();
		closeCallback();
	};

	const createExpense = (createdExpense: CreateExpenseFormData) => {
		saveCallback({ ...createdExpense, expenseId: crypto.randomUUID() });
	};

	const editExpense = (editedExpense: Expenses) => {
		saveCallback(editedExpense);
	};

	const onExpenseFormSubmit: SubmitHandler<CreateExpenseFormData> = (
		data,
	) => {
		if (isEdit) {
			editExpense({ ...data, expenseId: expense.expenseId });
		} else {
			createExpense(data);
		}
	};

	return (
		<form
			className={styles.expensesForm}
			onSubmit={handleSubmit(onExpenseFormSubmit)}
		>
			<UiInput label="Название траты" {...register("expensesName")} />
			<Controller
				name="amount"
				control={control}
				render={({ field }) => (
					<MaskedUiInput mask={Number} label="Сумма" {...field} />
				)}
			/>
			<Controller
				name="amountDirection"
				control={control}
				render={({ field: { onChange, value } }) => (
					<UiRadioGroup
						value={value}
						options={options}
						onChange={onChange}
					/>
				)}
			/>
			<Controller
				name="spendingDate"
				control={control}
				render={({ field }) => (
					<UiDatePicker label="Дата траты" {...field} />
				)}
			/>
			<Controller
				name="categoryId"
				control={control}
				render={({ field: { onChange, value } }) => (
					<CategorySelect
						value={value}
						onChange={onChange}
						label="Категории трат"
					/>
				)}
			/>
			<div className={styles.formControls}>
				<UiButtonsGroup>
					<UiButton
						onClick={() => clearForm()}
						viewType="transparent"
						type="reset"
						outline
					>
						Отменить
					</UiButton>
					<UiButton type="submit">
						{isEdit ? "Изменить" : "Добавить"}
					</UiButton>
				</UiButtonsGroup>
			</div>
		</form>
	);
};

export { ExpensesForm };
