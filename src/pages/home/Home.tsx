import { LastExpenses } from '@/widgets/lastExpenses';
import { WidgetContainer } from '@/shared/ui';

import styles from './styles.module.less';

const Home = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.leftWidget}>
                <WidgetContainer>
                    Тут будет виджет с графиком
                </WidgetContainer>
                <WidgetContainer>
                    А тут виджет с целями
                </WidgetContainer>
            </div>
            <WidgetContainer>
                <LastExpenses/>
            </WidgetContainer>
        </div>
    )
};

export {
    Home,
}