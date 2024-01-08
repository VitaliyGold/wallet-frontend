import type { FC } from 'react';

import { Expenses } from '@/entities/expenses';

interface ExpensesFormProps {
    expense: Expenses;
}

const expensesForm: FC<ExpensesFormProps> = ({ expense }) => {
    return (
        <div></div>
    )
};

export {
    expensesForm
}