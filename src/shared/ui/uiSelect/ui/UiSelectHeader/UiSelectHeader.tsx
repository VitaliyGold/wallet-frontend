import type { FC } from 'react';
import { memo } from 'react';
import cn from 'classnames';

import { UiText, Icon, UiLoader } from '@/shared/ui';

import styles from './styles.module.less';

interface UiSelectHeaderProps {
    currentLabel: string[];
    currentValuePlaceholder?: string;
    isLoading?: boolean;
}

const UiSelectHeader: FC<UiSelectHeaderProps> = memo(({ currentLabel, currentValuePlaceholder = 'Выберите', isLoading }) => {

    const currenLabelText = () => {
        if (!currentLabel.length) {
            return currentValuePlaceholder;
        }
        if (currentLabel.length <= 2) {
            return currentLabel.join('; ');
        }
        return `Выбрано: ${currentLabel.length}`;
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