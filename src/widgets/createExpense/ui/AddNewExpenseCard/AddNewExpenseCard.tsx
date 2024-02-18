import { useState } from 'react';
import type { FC } from 'react';
import { Icon, UiModal } from "@/shared/ui";
import { ExpensesForm } from "@/features/expensesForm";

import styles from './styles.module.less';
import { Expenses } from '@/entities/expenses';

interface AddNewExpenseCardProps {
    addNewExpense: (expense: Expenses) => void;
}

const AddNewExpenseCard: FC<AddNewExpenseCardProps> = ({ addNewExpense }) => {

    const [ isOpenModalCreateExpense, setModalCreateExpenseState ] = useState(false);

    const onAddNewExpense = (expense: Expenses) => {
        setModalCreateExpenseState(false);
        addNewExpense(expense);
    }

    return (
        <>
        <div className={styles.addNewExpenseCard} title="Добавить трату" onClick={() => setModalCreateExpenseState(true)}>
            <Icon iconType="plus" size={52}/>
        </div>
            {
                isOpenModalCreateExpense 
                && 
                <UiModal onHideCallback={() => setModalCreateExpenseState(false)}>
                    <ExpensesForm closeCallback={() => setModalCreateExpenseState(false)} saveCallback={(expense) => onAddNewExpense(expense)}/>
                </UiModal>
            }
        </>
    )
};

export {
    AddNewExpenseCard,
}