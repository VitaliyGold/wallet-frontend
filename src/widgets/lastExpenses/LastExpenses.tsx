import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { expensesListEntitiesSelector, totalExpensesSelector, getExpensesListThunk, expensesActions } from "@/entities/expenses";
import { ExpensesTable } from "@/features/expensesTable";
import { UiLoader, InfinityLoader } from "@/shared/ui";
import { getMonthAgo } from "@/shared/lib/dateMethods";

import { useAppDispatch } from "@/app";


const LastExpenses = () => {

    const [ offset, changeOffset ] = useState(0);

    const dispatch = useAppDispatch();

    const [ isTableResolved, setTableResolved ] = useState(false);

    const lastExpensesList = useSelector(expensesListEntitiesSelector.selectAll);
    const totalExpenses = useSelector(totalExpensesSelector);

    useEffect(() => {
        return () => {
            dispatch(expensesActions.clearExpenses())
        }
    }, []);

    useEffect(() => {
        getData().then(() => {
            if (!isTableResolved) {
                setTableResolved(true);
            }
        })
    }, [offset])

    const getData = () => {
        return dispatch(getExpensesListThunk({ 
            limit: 50, 
            offset, 
            name: '', 
            startDate: new Date('2023-08-07').getTime(), 
            endDate: new Date().getTime(),
            categoryIds: [],
            direction: 'all',
        })).unwrap();
    }

    const haveMoreData = !!lastExpensesList.length && lastExpensesList.length !== totalExpenses;

    const getMoreData = () => {
        changeOffset(offset + 50);
    }

    if (!isTableResolved) {
        return (
            <UiLoader/>
        )
    }

    if (!lastExpensesList) {
        return (
            <div>Трат пока нет</div>
        )
    }

    return (
        <ExpensesTable expensesList={lastExpensesList} infinityLoadingElement={<InfinityLoader getMoreCallback={getMoreData} condition={haveMoreData}/>}/>
    )
};

export {
    LastExpenses,
}