import type { FC, ReactNode } from 'react';
import cn from 'classnames';

import { UiText } from '@/shared/ui';

import styles from './styles.module.less';


interface WidgetContainerProps {
    children: ReactNode;
    widgetTitle?: string;
    widgetHeight?: 'full' | 'auto'
}

const WidgetContainer: FC<WidgetContainerProps> = ({ children, widgetTitle, widgetHeight = 'full' }) => {
    return (
        <div className={cn(styles.widgetContainer, styles[`${widgetHeight}Height`]) }>
            { widgetTitle && 
                <div className={styles.title}>
                    <UiText size='xl'>{widgetTitle}</UiText>
                </div>
            }
            { children }
        </div>
    )
}

export {
    WidgetContainer,
}