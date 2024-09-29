import { LastExpenses } from '@/widgets/lastExpenses';
import { ExpensesChart } from '@/widgets/expensesChart';
import { ExpensesActionsPanel } from '@/features/expensesActionsPanel';
import { WidgetContainer } from '@/shared/ui';

import styles from './styles.module.less';


const Dashboard = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.widget}>
                <WidgetContainer widgetTitle='Расходы по категориям'>
                    <ExpensesChart/>
                </WidgetContainer>
                <WidgetContainer>
                    А тут виджет с целями
                </WidgetContainer>
            </div>
            <div className={styles.widget}>
                <ExpensesActionsPanel/>
                <WidgetContainer>
                    <LastExpenses/>
                </WidgetContainer>
            </div>
        </div>
    )
};

export {
    Dashboard,
}