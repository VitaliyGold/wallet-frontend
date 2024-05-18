import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

import type { Expenses } from "@/entities/expenses";
import { getExpenseAdapter } from "@/entities/expenses";
import { formatDateToFront } from "@/shared/lib/dateMethods";
import { categorySelector, categoryListSelector } from "@/entities/category";
import { useSelector } from "react-redux";

import { transformDataToCharts } from './helpers/transformDataToCharts';
import { ExpenseChartTooltip } from "./ui/expensesChartTooltip/ExpenseChartTooltip";

const ExpenseChart = () => {

    const apiResponse = [
            {
                "expenses_id": "f5752514-db7e-4f13-bd9b-2e9440b41260",
                "amount": 200,
                "date": "2024-04-08T20:47:53.756Z",
                "name": "Пиво",
                "category": [{ category_id: "d6bf66ca-fa9b-4c85-926f-a3f760bd6dc0" }],
                "tags": []
            },
            {
                "expenses_id": "2efe6fc4-ac3c-4397-80fa-f0f679396394",
                "amount": 900,
                "date": "2024-04-08T20:04:01.011Z",
                "name": "Нашел на улице",
                "category": [{ category_id: "53ae84b8-5e62-4f5b-87c8-6b2522ceb807" }],
                "tags": []
            },
            {
                "expenses_id": "7c29fb4f-bb05-414a-9e5a-5db36a0097bb",
                "amount": 500,
                "date": "2024-04-05T20:00:06.391Z",
                "name": "Лотерея",
                "category": [{ category_id: "d6bf66ca-fa9b-4c85-926f-a3f760bd6dc0" }],
                "tags": []
            }
        ];

    const chartData = transformDataToCharts(apiResponse.map(expense => getExpenseAdapter(expense)));
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