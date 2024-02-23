import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/app";
import { filtersExpensesSelector, getExpensesTotalThunk, expensesListEntitiesSelector } from "@/entities/expenses";
import { UiLoader } from "@/shared/ui";

import styles from './styles.module.less';

const ExpensesTotal = () => {

    const [totalAmount, setTotalAmount] = useState(0);
    const [isLoading, setLoading] = useState(true);

    const dispatch = useAppDispatch();

    const { endDate, startDate, expensesName } = useSelector(filtersExpensesSelector);

    useEffect(() => {
        getExpensesTotal();
    }, [endDate, startDate, expensesName]);

    const getExpensesTotal = async () => {
        setLoading(true);
        const total = await dispatch(getExpensesTotalThunk({ name: expensesName, startDate, endDate })).unwrap();
        setLoading(false);
        setTotalAmount(total);
    }

    const getContent = () => {
        return (
            <div className={styles.content}>
                <span className={styles.title}>Всего потрачено за период:</span>
                <span className={styles.total}>{ totalAmount } ₽</span>
            </div>
        )
    }

    return (
        <div className={styles.expensesTotal}>
            { isLoading ? <UiLoader size={24}/> : getContent() }
        </div>
    )
};

export {
    ExpensesTotal,
}