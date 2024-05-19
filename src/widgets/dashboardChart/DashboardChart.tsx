import { useEffect, useState } from "react";

import { ExpenseChart, transformDataToCharts } from "@/features/expenseChart";
import type { ChartData } from "@/features/expenseChart";
import { getExpensesListThunk } from "@/entities/expenses";
import { UiLoader } from "@/shared/ui";
import { useAppDispatch } from "@/app";

import styles from './styles.module.less';

const DashboardChart = () => {

    const dispatch = useAppDispatch();

    const [ isLoading, setLoading ] = useState(true);
    const [ isError, setError ] = useState(false);
    const [ expenseByCategoryList, setExpenseByCategory ] = useState<ChartData[]>([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {

        setError(false);
        setLoading(true);
        try {
            const { data } = await dispatch(getExpensesListThunk({ 
                limit: 0, 
                offset: 0, 
                name: '', 
                startDate: new Date('2023-08-07').getTime(), 
                endDate: new Date().getTime(),
                categoryIds: [],
            })).unwrap();
            setExpenseByCategory(transformDataToCharts(data));
        } catch(e) {
            setError(true);
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className={styles.dashboardChart} >
            { isLoading ? <UiLoader/> : <ExpenseChart chartData={expenseByCategoryList}/> }
        </div>
    );
};

export {
    DashboardChart,
}