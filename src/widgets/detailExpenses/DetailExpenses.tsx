import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app";

import { ExpensesList } from "@/features/expensesList";
import { expensesListEntitiesSelector, totalExpensesSelector, getExpensesListThunk, expensesActions } from "@/entities/expenses";
import { UiLoader, UiModal, InfinityLoader } from "@/shared/ui";

const DetailExpenses = () => {

    const [ isLoading, setLoading ] = useState(false);
    const [ offset, changeOffset ] = useState(0);

    const dispatch = useAppDispatch();

    const expensesList = useSelector(expensesListEntitiesSelector.selectAll);
    const totalExpenses = useSelector(totalExpensesSelector)

    useEffect(() => {
        getData().then(() => {
            if (!isLoading) {
                setLoading(false);
            }
        })
    }, [offset])

    const getData = () => {
        return dispatch(getExpensesListThunk({ limit: 50, offset, name: '' })).unwrap();
    }

    const getMoreData = () => {
        changeOffset(offset + 50);
    };

    const haveMoreData = !!expensesList.length && expensesList.length !== totalExpenses;

    if (isLoading) {
        return <UiLoader/>
    }

    return (
        <div>
            <ExpensesList expensesList={expensesList}/>
            <InfinityLoader condition={haveMoreData} getMoreCallback={getMoreData}/>
        </div>
    )
};

export {
    DetailExpenses,
}