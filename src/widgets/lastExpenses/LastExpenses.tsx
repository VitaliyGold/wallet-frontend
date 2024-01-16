import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { InView } from 'react-intersection-observer';

import { expensesListEntitiesSelector, totalExpensesSelector, getExpensesListThunk, expensesActions } from "@/entities/expenses";
import { ExpensesTable } from "@/features/expensesTable";
import { UiLoader } from "@/shared/ui";

import { useAppDispatch } from "@/app";


const LastExpenses = () => {

    const [ offset, changeOffset ] = useState(0);

    const dispatch = useAppDispatch();

    const [ isTableResolved, setTableResolved ] = useState(false);

    const lastExpensesList = useSelector(expensesListEntitiesSelector.selectAll);
    const totalExpenses = useSelector(totalExpensesSelector)

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
        if (lastExpensesList && totalExpenses !== lastExpensesList.length) {
            return (
                <InView onChange={getMoreData}>
                    <UiLoader size={20}/>
                </InView> 
            )
        }
        return null
    }

    if (!lastExpensesList) {
        return (
            <div>Трат пока нет</div>
        )
    }

    return (
        <ExpensesTable expensesList={lastExpensesList} infinityLoadingElement={getInfinityLoader()}/>
    )
};

export {
    LastExpenses,
}