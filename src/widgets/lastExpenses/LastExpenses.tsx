import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { InView } from 'react-intersection-observer';

import { expensesListSelector, getExpensesListThunk, expensesActions } from "@/entities/expenses";
import { ExpensesTable } from "@/features/expensesTable";
import { UiLoader } from "@/shared/ui";

import { useAppDispatch } from "@/app";


const LastExpenses = () => {

    const [ offset, changeOffset ] = useState(0);

    const dispatch = useAppDispatch();

    const [ isTableResolved, setTableResolved ] = useState(false);

    const { totalExpenses, expensesList } = useSelector(expensesListSelector)

    useEffect(() => {
        return () => {
            dispatch(expensesActions.clearExpensesList())
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
        return dispatch(getExpensesListThunk({ limit: 50, offset, name: '' })).unwrap();
    }

    const getMoreData = (isVisible: boolean) => {
        if (isVisible && isTableResolved) {
            changeOffset(offset + 50);
        }
    }

    if (!isTableResolved) {
        return (
            <UiLoader/>
        )
    }

    const getInfinityLoader = () => {
        if (expensesList && totalExpenses !== expensesList.length) {
            return (
                <InView onChange={getMoreData}>
                    <UiLoader size={20}/>
                </InView> 
            )
        }
        return null
    }

    if (!expensesList) {
        return (
            <div>Трат пока нет</div>
        )
    }

    return (
        <ExpensesTable expensesList={expensesList} infinityLoadingElement={getInfinityLoader()}/>
    )
};

export {
    LastExpenses,
}