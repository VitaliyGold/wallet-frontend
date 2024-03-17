import type { FC, ReactNode } from 'react';
import { UiText } from '@/shared/ui';

import styles from './styles.module.less';

interface CategoryLabelProps {
    children: ReactNode;
}

const CategoryLabel: FC<CategoryLabelProps> = ({ children }) => {
    return (
        <div className={styles.categoryLabel}>
            <UiText size={'xs'}>{ children }</UiText>
        </div>
    )
}

export {
    CategoryLabel,
}