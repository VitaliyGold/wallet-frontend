import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { LastExpenses } from '@/widgets/lastExpenses';
import { ExpensesActionsPanel } from '@/features/expensesActionsPanel';
import { WidgetContainer, UiCheckbox } from '@/shared/ui';

import styles from './styles.module.less';


const Home = () => {

    const [ value, setValue ] = useState(false);


    return (
        <div className={styles.pageContainer}>
            <div className={styles.widget}>
                <WidgetContainer>
                    <UiCheckbox value={value} onChange={(value) => setValue(value)}>Выбор</UiCheckbox>
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