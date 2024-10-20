import type { FC } from 'react';
import cn from 'classnames';

import { UiText, UiCheckbox } from '@/shared/ui';

import styles from './styles.module.less';

interface UiOptionProps {
    label: string;
    disabled?: boolean;
    isSelected: boolean;
    withCheckbox?: boolean;
    onSelect: (check: boolean) => void;
}

const UiOption: FC<UiOptionProps> = ({ label, disabled = false, isSelected, withCheckbox = false, onSelect }) => {
    return (
        <div className={cn([styles.option, { [styles.selected]: isSelected && !withCheckbox, [styles.disabledOption]: disabled } ])} onClick={() => onSelect(!isSelected)}>
            { withCheckbox && <UiCheckbox value={isSelected} disabled={disabled}/> }
            <UiText>{label}</UiText>
        </div>
    )
};

export {
    UiOption,
}