import type { FC, ReactNode } from 'react';

import styles from './styles.module.less';


interface WidgetContainerProps {
    children: ReactNode
}

const WidgetContainer: FC<WidgetContainerProps> = ({ children }) => {
    return (
        <div className={styles.widgetContainer}>
            { children }
        </div>
    )
}

export {
    WidgetContainer,
}