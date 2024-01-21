import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "@/app";
import { ExpensesActionsPanel } from "@/features/expensesActionsPanel";
import { filtersExpensesSelector, expensesActions } from "@/entities/expenses";
import { UiInput } from "@/shared/ui";
import type { ExpensesFilters } from "@/entities/expenses";

import { isEqualFilter } from './lib/isEqualFilter';
import styles from './styles.module.less';

const ExpensesFilter = () => {
    const dispatch = useAppDispatch();

    const filter = useSelector(filtersExpensesSelector);

    const { register, handleSubmit } = useForm<ExpensesFilters>({ defaultValues: filter })

    const onSubmitFilters = (newFilters: ExpensesFilters) => {
        if (!isEqualFilter(newFilters, filter)) dispatch(expensesActions.setFilters(newFilters));
    };

    return (
        <ExpensesActionsPanel>
            <form className={styles.expensesFilters} onBlur={handleSubmit(onSubmitFilters)}>
                <UiInput label="Название" labelPosition="left" { ...register('expensesName') } />
                <div className={styles.periodFilters}>
                    с
                    <UiInput type='date' { ...register('startDate') } />
                    по
                    <UiInput type='date' { ...register('endDate') } />
                </div>
            </form>
        </ExpensesActionsPanel>
    )
};

export {
    ExpensesFilter,
}