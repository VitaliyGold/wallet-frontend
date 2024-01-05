import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { expensesListSelector, getExpensesListThunk, expensesActions } from "@/entities/expenses";
import { ExpensesTable } from "@/features/expensesTable";
import { UiLoader } from "@/shared/ui";

import { useAppDispatch } from "@/app/providers/model/store";


const LastExpenses = () => {

    const dispatch = useAppDispatch();

    const [ isTableResolved, setTableResolved ] = useState(false);

    useEffect(() => {
        dispatch(getExpensesListThunk({ limit: 50, offset: 0, name: '' }))
        .unwrap()
        .then(() => {
            setTableResolved(true);
        })
        return () => {
            dispatch(expensesActions.clearExpensesList())
        }
    }, []);


    const expensesList = useSelector(expensesListSelector)

    if (!isTableResolved) {
        return (
            <UiLoader/>
        )
    }

    return (
        <div>
            <ExpensesTable expensesList={expensesList} />
        </div>
    )
};

export {
    LastExpenses,
}