import { defaultExpensesFilter, ExpensesFilters } from '@/entities/expenses';
import type { FC } from 'react';
import { useForm, Controller } from "react-hook-form";

import { UiDatePicker, UiInput, UiButton } from "@/shared/ui";
import { CategorySelect } from "@/entities/category";

import styles from './styles.module.less';
import { isEqualFilter } from '../../lib/isEqualFilter';

interface FilterBodyProps {
    filters: ExpensesFilters;
    onSubmit: (newFilters: ExpensesFilters) => void;
}

const FilterBody: FC<FilterBodyProps> = ({ filters, onSubmit }) => {

    const { register, handleSubmit, control } = useForm<ExpensesFilters>({ defaultValues: filters })

    const onSubmitFilters = (newFilters: ExpensesFilters) => {
        if (!isEqualFilter(newFilters, filters)) onSubmit(newFilters);
    };

    const onResetFilters = () => {
        onSubmitFilters(defaultExpensesFilter());
    }

    return (
        <form className={styles.filtersForm} onSubmit={handleSubmit(onSubmitFilters)} onReset={onResetFilters}>
            <UiInput label="Название" labelPosition="top" { ...register('expensesName') } />
            <div className={styles.periodFilters}>
                <Controller
                    name='startDate'
                    control={control}
                    render={({ field }) => (<UiDatePicker { ...field } />)}
                />
                <Controller
                    name='endDate'
                    control={control}
                    render={({ field }) => (<UiDatePicker { ...field }/>)}
                />
            </div>
                <Controller
                    name='categoryIds'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <CategorySelect value={value} onChange={onChange}/>
                    )}
                />
            <div className={styles.filterActions}>
                <UiButton type='reset' viewType='white' outline>
                    Сбросить
                </UiButton>
                <UiButton type='submit'>
                    Применить
                </UiButton>
            </div>
        </form>
    )
        
};

export {
    FilterBody,
}