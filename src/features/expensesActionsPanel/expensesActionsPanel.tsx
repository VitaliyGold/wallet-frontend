import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { UiButton } from '@/shared/ui';
import styles from './styles.module.less';

interface ExpensesActionsPanel {
    children?: ReactNode;
}

const ExpensesActionsPanel: FC<ExpensesActionsPanel> = ({ children }) => {
    return (
        <div className={styles.actionPanel}>
            { children }
            <Link to={'/expenses/create'}>
                <UiButton>
                    Новый расход
                </UiButton>
            </Link>
        </div>
    )
};

export {
    ExpensesActionsPanel,
}