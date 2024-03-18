import type { FC, ReactNode } from 'react';
import cn from 'classnames';

import { UiText, BackgroundLoading } from '@/shared/ui';

import styles from './styles.module.less';

interface CategoryLabelProps {
    children: ReactNode;
    size?: 'small' | 'large';
    controlPanel?: ReactNode;
    isLoading?: boolean;
}

const CategoryLabel: FC<CategoryLabelProps> = ({ children, size = 'small', isLoading = false }) => {
    return (
        <div className={cn(styles.categoryLabel, styles[`${size}Label`])}>
            <UiText size={size === 'small' ? 'xs' : 'l'}>{ children }</UiText>
            { isLoading && <BackgroundLoading/>}
        </div>
    )
}

export {
    CategoryLabel,
}