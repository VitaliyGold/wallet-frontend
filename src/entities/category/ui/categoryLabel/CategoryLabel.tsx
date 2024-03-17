import type { FC, ReactNode } from 'react';
import cn from 'classnames';

import { UiText } from '@/shared/ui';

import styles from './styles.module.less';

interface CategoryLabelProps {
    children: ReactNode;
    size?: 'small' | 'large';
    controlPanel?: ReactNode;
}

const CategoryLabel: FC<CategoryLabelProps> = ({ children, size = 'small' }) => {
    return (
        <div className={cn(styles.categoryLabel, styles[`${size}Label`])}>
            <UiText size={size === 'small' ? 'xs' : 'l'}>{ children }</UiText>
        </div>
    )
}

export {
    CategoryLabel,
}