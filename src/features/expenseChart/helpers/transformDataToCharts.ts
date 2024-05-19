import { Expenses } from "@/entities/expenses";
import { formatDateToFront } from "@/shared/lib/dateMethods";
import { EMPTY_CATEGORY_ID } from "@/entities/category";

import { ChartData, GroupChartByDate } from "../types";

const transformDataToCharts = (expenses: Expenses[]): ChartData[] => {
    const dateGroup:GroupChartByDate = new Map();

    const setAmountCategoryToGroup = (date: string, amount: number, categoryId = EMPTY_CATEGORY_ID): void => {
        if (dateGroup.has(date) && dateGroup.get(date)![categoryId]) {
            // @ts-ignore
            dateGroup.get(date)![categoryId] += amount;
        } else {
            dateGroup.get(date)![categoryId] = amount;
        }
    }

    for (const expense of expenses) {
        const formattedSpendingDate = formatDateToFront(new Date(expense.spendingDate).getTime())

        if (!dateGroup.has(formattedSpendingDate)) {
            dateGroup.set(formattedSpendingDate, { date: formattedSpendingDate })
        }
            
        if (!expense.categoryIds[0]) {
            setAmountCategoryToGroup(formattedSpendingDate, +expense.amount)
        } else {
            setAmountCategoryToGroup(formattedSpendingDate, +expense.amount, expense.categoryIds[0]);
        }
    }

    console.log(Array.from(dateGroup.values()));

    return Array.from(dateGroup.values());

}

export {
    transformDataToCharts,
}