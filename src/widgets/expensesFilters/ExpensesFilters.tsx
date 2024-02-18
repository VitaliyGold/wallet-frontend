import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";

import { useAppDispatch } from "@/app";
import { ExpensesActionsPanel } from "@/features/expensesActionsPanel";
import { filtersExpensesSelector, expensesActions } from "@/entities/expenses";
import { UiDatePicker, UiInput } from "@/shared/ui";
import type { ExpensesFilters } from "@/entities/expenses";

import { isEqualFilter } from './lib/isEqualFilter';
import styles from './styles.module.less';

const ExpensesFilter = () => {
    const dispatch = useAppDispatch();

    const filter = useSelector(filtersExpensesSelector);

    const { register, handleSubmit, control } = useForm<ExpensesFilters>({ defaultValues: filter })

    const onSubmitFilters = (newFilters: ExpensesFilters) => {
        if (!isEqualFilter(newFilters, filter)) dispatch(expensesActions.setFilters(newFilters));
    };

    return (
        <ExpensesActionsPanel>
            <form className={styles.expensesFilters} onBlur={handleSubmit(onSubmitFilters)}>
                <UiInput label="Название" labelPosition="left" { ...register('expensesName') } />
                <div className={styles.periodFilters}>
                    с
                    <Controller
                        name='startDate'
                        control={control}
                        render={({ field }) => (<UiDatePicker { ...field } />)}
                    />
                    по
                    <Controller
                        name='endDate'
                        control={control}
                        render={({ field }) => (<UiDatePicker { ...field } />)}
                    />
                </div>
            </form>
        </ExpensesActionsPanel>
    )
};

export {
    ExpensesFilter,
}