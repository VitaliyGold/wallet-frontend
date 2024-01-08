import { useSelector } from "react-redux";

import { useAppDispatch } from "@/app";
import { ExpensesList } from "@/features/expensesList";
import { createExpensesStateSelector, createExpensesActions } from '@/entities/expenses';

import { ActionsMenu } from "./ui/ActionsMenu/ActionsMenu";
import styles from './styles.module.less';

const CreateExpenses = () => {
    console.log('рендер')

    const dispatch = useAppDispatch();

    dispatch(createExpensesActions.addNewExpense({ expenseId: '123', expensesName: 'Тестовая трата', amount: 200, categoryIds: [], tagIds: [], spendingDate: '11.02.2023' }))

    const createExpensesList = useSelector(createExpensesStateSelector.selectAll);

    const goBackCallback = () => {
        dispatch(createExpensesActions.removeAllExpenses());
    }

    const saveExpenses = () => {
        console.log('сохранение')
    }


    return (
        <div className={styles.createExpenses}>
            <ActionsMenu disabledSave={!createExpensesList.length} saveExpensesCallback={saveExpenses} goBackCallback={goBackCallback}/>
            <ExpensesList expensesList={createExpensesList} />
        </div>
    )
};

export {
    CreateExpenses,
}