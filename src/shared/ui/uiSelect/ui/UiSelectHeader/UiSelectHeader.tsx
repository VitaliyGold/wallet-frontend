import type { FC } from 'react';
import { memo } from 'react';
import cn from 'classnames';

import { UiText, Icon, UiLoader } from '@/shared/ui';

import styles from './styles.module.less';

interface UiSelectHeaderProps {
    currentLabel: string[];
    currentValuePlaceholder?: string;
    isLoading?: boolean;
    multiply?: boolean;
}

const UiSelectHeader: FC<UiSelectHeaderProps> = memo(({ currentLabel, currentValuePlaceholder = 'Выберите', isLoading, multiply = false }) => {

    const currenLabelText = () => {
        if (!currentLabel.length) {
            return currentValuePlaceholder;
        } else if (multiply) {
            return `Выбрано: ${currentLabel.length}`;
        } else {
            return currentLabel[0] ?? '';
        }
        
    }

    return (
        <div className={cn(styles.uiSelectHeader, isLoading ? styles.loading : '')}>
            {
                isLoading ? 
                    <UiLoader size={22}/> 
                    : 
                    <>
                        <div className={styles.label}>
                            <UiText color={currentLabel.length ? 'inherit' : 'gray'}>{ currenLabelText() }</UiText>
                        </div>
                        
                    </>
            }
            <Icon iconType='down' size={20}/>
            
        </div>
    )
});

export {
    UiSelectHeader,
}