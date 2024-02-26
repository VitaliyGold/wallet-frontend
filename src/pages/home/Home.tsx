import { LastExpenses } from '@/widgets/lastExpenses';
import { ExpensesActionsPanel } from '@/features/expensesActionsPanel';
import { WidgetContainer } from '@/shared/ui';

import styles from './styles.module.less';


const Home = () => {


    return (
        <div className={styles.pageContainer}>
            <div className={styles.widget}>
                <WidgetContainer>
                    Тут будет виджет с графиком
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
    Home,
}