import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/app";
import { ExpensesList } from "@/features/expensesList";
import { createExpensesStateSelector, createExpensesActions, Expenses, createExpensesThunk } from '@/entities/expenses';
import { UiLoader } from "@/shared/ui";

import { ActionsMenu } from "./ui/ActionsMenu/ActionsMenu";
import { AddNewExpenseCard } from "./ui/AddNewExpenseCard/AddNewExpenseCard";
import styles from './styles.module.less';

const CreateExpenses = () => {

    const [ isLoading, setLoading ] = useState(false);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const createExpensesList = useSelector(createExpensesStateSelector.selectAll);

    const goBackCallback = () => {
        dispatch(createExpensesActions.removeAllExpenses());
    }

    const saveExpenses = async () => {
        setLoading(true);
        await dispatch(createExpensesThunk(createExpensesList));
        navigate('/expenses');
    }

    const onAddExpense = (expense: Expenses) => {
        dispatch(createExpensesActions.addNewExpense(expense));
    }

    if (isLoading) {
        return <UiLoader/>
    }

    return (
        <div className={styles.createExpenses}>
            <ActionsMenu disabledSave={!createExpensesList.length} saveExpensesCallback={saveExpenses} goBackCallback={goBackCallback}/>
            <ExpensesList expensesList={createExpensesList} lastListItem={<AddNewExpenseCard addNewExpense={onAddExpense} />}/>
        </div>
    )
};

export {
    CreateExpenses,
}