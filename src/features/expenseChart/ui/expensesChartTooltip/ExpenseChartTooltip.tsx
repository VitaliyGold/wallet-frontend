import { FC } from 'react';
import type { TooltipProps } from "recharts";
import { useSelector } from "react-redux";

import { categoryListSelector } from "@/entities/category";

import styles from './styles.module.less';

const ExpenseChartTooltip: FC<TooltipProps<string | number[], 'string'>> = ({ active, payload }) => {

    const categories = useSelector(categoryListSelector.selectEntities);

    if (active && payload && payload[0]) {
        const barCategoryIds = Object.entries(payload[0].payload).filter(field => field[0] !== 'date');
        return (
            <div className={styles.expenseChartTooltip}>
                <p className={styles.expenseDate}>{ payload[0].payload.date }</p>
                { 
                    barCategoryIds.map(tooltipData => 
                        <p key={tooltipData[0]} className={styles.category}>
                            <>
                                <span className={styles.categoryName} style={{ color: categories[tooltipData[0]].color }} >{categories[tooltipData[0]].name}</span>
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