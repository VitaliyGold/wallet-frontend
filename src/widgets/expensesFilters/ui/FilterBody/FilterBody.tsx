import type { FC } from 'react';
import { Controller } from "react-hook-form";
import type { Control, UseFormRegister } from 'react-hook-form';

import { UiDatePicker, UiInput, UiButton } from "@/shared/ui";
import { debounce } from '@/shared/lib/debounce';
import { CategorySelect } from "@/entities/category";
import type { ExpensesFilters } from "@/entities/expenses";

import styles from './styles.module.less';

interface FilterBodyProps {
    register: UseFormRegister<ExpensesFilters>;
    control: Control<ExpensesFilters>;
}

const FilterBody: FC<FilterBodyProps> = ({ control, register }) => {

    return (
        <div className={styles.filterBody}>
            <UiInput label="Название" labelPosition="top" { ...register('expensesName') } />
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
            </div>
        </div>
    )
        
};

export {
    FilterBody,
}