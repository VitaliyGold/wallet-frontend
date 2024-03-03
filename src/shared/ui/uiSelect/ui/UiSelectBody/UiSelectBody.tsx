import type { FC, ReactNode } from 'react';

import styles from './styles.module.less';

interface UiSelectBodyProps {
   withSearch?: boolean;
   children: ReactNode;
}

const UiSelectBody: FC<UiSelectBodyProps> = ({ children }) => {
    return (
        <div className={styles.uiSelectBody}>
            {children}
        </div>
    )
};

export {
    UiSelectBody,
}