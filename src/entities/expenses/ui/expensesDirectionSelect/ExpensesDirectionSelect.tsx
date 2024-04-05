import type { FC } from 'react';

import { UiSelect } from "@/shared/ui";
import type { IUiOption } from "@/shared/ui/uiSelect";

import { ExpenseDirection } from '../../types/expenses';

interface ExpensesDirectionSelectProps {
    value: ExpenseDirection;
    onChange: (direction: ExpenseDirection) => void;
}

const ExpensesDirectionSelect: FC<ExpensesDirectionSelectProps> = ({ value, onChange }) => {

    const expensesDirectionOptions: { value: ExpenseDirection, label: string } [] = [
        {
            value: 'incomes',
            label: 'Доход'
        }, 
        {
            value: 'expenses',
            label: 'Расход'
        }
    ]

    return (
        <UiSelect
            label='Выберите направление траты'
            currentValuePlaceholder='Доход'
            options={expensesDirectionOptions}
            currentValue={value}
            // TODO селект в идеальном мире будущего принимает дженерик
            onSelected={(selectedValue) => onChange(selectedValue as ExpenseDirection)}
        />
    )
};

export {
    ExpensesDirectionSelect,
}