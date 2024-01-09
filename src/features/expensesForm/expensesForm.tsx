import type { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Expenses } from '@/entities/expenses';
import { UiInput, UiButton, ButtonsGroup } from '@/shared/ui';

import styles from './styles.module.less';

interface ExpensesFormProps {
    expense: Expenses;
}

const ExpensesForm: FC<ExpensesFormProps> = ({ expense }) => {

    const { register, handleSubmit, reset } = useForm<Omit<Expenses, 'expenseId'>>();

    const handleSubmit2 = () => {
        console.log(123123)
    }

    const handleSubmit3 = () => {
        console.log('555')
    }

    return (
        <div className={styles.expensesForm}>
            <UiInput label="Название" { ...register('expensesName') }/>
            <UiInput label="Сумма"/>
            <UiInput label="Дата" type={'date'}/>
            <ButtonsGroup>
                <UiButton onClick={() => handleSubmit3()}>Отменить</UiButton>
                <UiButton onClick={() => handleSubmit2()}>Добавить</UiButton>
            </ButtonsGroup>
        </div>
    )
};

export {
    ExpensesForm
}