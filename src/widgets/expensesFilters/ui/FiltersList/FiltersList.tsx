import type { FC } from 'react';
import { Controller } from "react-hook-form";
import type { Control, UseFormRegister } from 'react-hook-form';

import { UiInput } from "@/shared/ui";
import { CategorySelect } from "@/entities/category";
import type { ExpensesFilters } from "@/entities/expenses";

import { PeriodFilter } from '../PeriodFilter/PeriodFilter';
import { FilterContainer } from '../FilterContainer/FilterContainer';

import styles from './styles.module.less';

interface FiltersListProps {
    register: UseFormRegister<ExpensesFilters>;
    control: Control<ExpensesFilters>;
}


const FiltersList: FC<FiltersListProps> = ({ control, register }) => {
    console.log(12312)
    return (
        <div className={styles.filtersList}>
            <FilterContainer maxWidth={250}>
                <UiInput placeholder='Название'  { ...register('expensesName') } />
            </FilterContainer>
            <FilterContainer maxWidth={300}>
                <PeriodFilter control={control}/>
            </FilterContainer>
            <FilterContainer maxWidth={200}>
                <Controller
                    name='categoryIds'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <CategorySelect value={value} onChange={onChange} multiply={true}/>
                    )}
                />
            </FilterContainer>
        </div>
    )
}

export {
    FiltersList,
}