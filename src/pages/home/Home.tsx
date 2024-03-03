import { useState } from 'react';

import { LastExpenses } from '@/widgets/lastExpenses';
import { ExpensesActionsPanel } from '@/features/expensesActionsPanel';
import { WidgetContainer, UiSelect } from '@/shared/ui';

import styles from './styles.module.less';


const Home = () => {

    const [ selectedValue, onSelectValue ] = useState<string[]>([]);

    const onSelected = (value: string, isSelected: boolean) => {
        if (isSelected) {
            onSelectValue([...selectedValue, value])
        } else {
            const filteredValue = selectedValue.filter(selected => value !== selected);
            onSelectValue(filteredValue)
        }
    }

    const options = [
        {
            value: '1', label: 'Первый'
        },
        {
            value: '2', label: 'Второй'
        }
    ]

    return (
        <div className={styles.pageContainer}>
            <div className={styles.widget}>
                <WidgetContainer>
                    <UiSelect options={options} currentValue={selectedValue} onSelected={onSelected} currentValuePlaceholder="Категории"/>
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