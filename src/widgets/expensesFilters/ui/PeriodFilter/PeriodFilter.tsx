import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";
import type { FC } from "react";
import type { ExpensesFilters } from "@/entities/expenses";

import { UiDatePicker } from "@/shared/ui";

import styles from './styles.module.less';

interface Props {
    control: Control<ExpensesFilters>;
}

const PeriodFilter: FC<Props> = ({ control }) => {
    return (
        <div className={styles.periodFilters}>
            <Controller
                name='startDate'
                control={control}
                render={({ field }) => (<UiDatePicker { ...field } />)}
            />
            <span>-</span>
            <Controller
                name='endDate'
                control={control}
                render={({ field }) => (<UiDatePicker { ...field }/>)}
            />
        </div>
    );
};

export {
    PeriodFilter,
}