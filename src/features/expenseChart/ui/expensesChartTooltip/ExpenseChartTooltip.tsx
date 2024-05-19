import { FC } from 'react';
import type { TooltipProps } from "recharts";
import { useSelector } from "react-redux";

import { categoryListSelector, UNKNOWN_CATEGORY_NAME, EMPTY_CATEGORY_NAME, EMPTY_CATEGORY_ID } from "@/entities/category";

import styles from './styles.module.less';

const ExpenseChartTooltip: FC<TooltipProps<string | number[], 'string'>> = ({ active, payload }) => {

    const categories = useSelector(categoryListSelector.selectEntities);


    const getCategoryName = (categoryId: string): string => {
       if (categoryId === EMPTY_CATEGORY_ID) {
            return EMPTY_CATEGORY_NAME;
        }
        if (!categories[categoryId]) {
            return UNKNOWN_CATEGORY_NAME;
        }

        return categories[categoryId].name;
    }

    if (active && payload && payload[0]) {
        const barCategoryIds = Object.entries(payload[0].payload).filter(field => field[0] !== 'date');
        return (
            <div className={styles.expenseChartTooltip}>
                <p className={styles.expenseDate}>{ payload[0].payload.date }</p>
                { 
                    barCategoryIds.map(tooltipData => 
                        <p key={tooltipData[0]} className={styles.category}>
                            <>
                                <span className={styles.categoryName} >{getCategoryName(tooltipData[0])}</span>
                                :
                                <span>{tooltipData[1] as number}</span></>
                        </p> 
                    ) 
                }
            </div>
        )
    }
  
    return null;
};

export {
    ExpenseChartTooltip,
}