import { useEffect } from "react";
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip, TooltipProps, Legend } from "recharts";
import { useSelector } from "react-redux";

import { expensesBarDataSelector, isExpensesBarLoadingSelector, isExpensesBarErrorSelector, getExpensesGroupByCategoryThunk, expensesBarActions } from '@/entities/expenses';
import { categoryListSelector } from "@/entities/category";
import { useAppDispatch } from "@/app";
import { UiLoader } from "@/shared/ui";

import { ChartTooltip } from "./ui/chartTooltip/ChartTooltip";
import { ErrorChart } from "./ui/errorChart/ErrorChart";
import styles from './styles.module.less';


const ExpensesChart = () => {

    const dispatch = useAppDispatch();

    const categories = useSelector(categoryListSelector.selectEntities);

    const isLoading = useSelector(isExpensesBarLoadingSelector);

    const isError = useSelector(isExpensesBarErrorSelector);
    
    const expensesGroupData = useSelector(expensesBarDataSelector.selectAll);

    const getData = () => dispatch(getExpensesGroupByCategoryThunk({ startDate: new Date('2023-08-07').getTime(), endDate: new Date('2024-09-29').getTime()}));

    const clearData = () => {expensesBarActions.clearExpenses()}

    console.log(expensesGroupData)

    useEffect(() => {
        getData();
        return clearData;
    }, []);

    const getColorByCategoryId = (categoryId: string) => {
        return categories[categoryId].color ?? 'black';
    }

    const getCategoryName = (categoryId: string) => {
        return categories[categoryId].name ?? 'Неизвестная категория';
    }

    const tooltipContent = (tooltipProps: TooltipProps<number, string>) => {
        if (!tooltipProps.active) return null;
        const hoverCategoryId = tooltipProps.payload && tooltipProps.payload[0]?.name;

        const hoverCategoryAmount = (tooltipProps.payload && tooltipProps.payload[0]?.value) ?? 0;

        return hoverCategoryId ? <ChartTooltip categoryName={getCategoryName(hoverCategoryId)} amount={hoverCategoryAmount} /> : null;
    }

    if (isLoading) {
        return <UiLoader/>;
    }

    if (isError) {
        return <ErrorChart onRetry={getData}/>
    }

    return <div className={styles.chartContainer}>
        <ResponsiveContainer>
            <PieChart>
                <Pie data={expensesGroupData} dataKey='totalAmount' nameKey='categoryId'>
                    { expensesGroupData.map(expense => <Cell key={expense.categoryId} name={getCategoryName(expense.categoryId)}  fill={getColorByCategoryId(expense.categoryId)} />) }
                </Pie>
                <Tooltip content={tooltipContent}/>
                <Legend/>
            </PieChart>
        </ResponsiveContainer>
    </div>
};

export {
    ExpensesChart,
}