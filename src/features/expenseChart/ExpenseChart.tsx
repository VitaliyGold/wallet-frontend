import type { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { useSelector } from "react-redux";
import { categoryListSelector } from "@/entities/category";

import { ExpenseChartTooltip } from "./ui/expensesChartTooltip/ExpenseChartTooltip";
import type { ChartData } from './types';

interface ExpenseChartProps {
    chartData: ChartData[];
}

const ExpenseChart: FC<ExpenseChartProps> = ({ chartData }) => {

    const categories = useSelector(categoryListSelector.selectAll);

    return (
        <BarChart
            width={800}
            height={400}
            data={chartData}
        >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip content={<ExpenseChartTooltip />} />
            {categories.map((category) => (
                <Bar key={category.categoryId} dataKey={category.categoryId} stackId="a" fill={category.color} />
            ))}
        </BarChart>
    );
};

export {
    ExpenseChart
}