import type { FC, ReactNode, ChangeEvent } from 'react';
import cn from 'classnames';

import styles from './styles.module.less';

interface UiCheckboxProps {
    children: ReactNode;
    value: boolean;
    onChange: (newValue: boolean) => void;
    disabled?: boolean; 
}

const UiCheckbox: FC<UiCheckboxProps> = ({ children, value, onChange, disabled }) => {

    const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    }

    return (
        <label className={cn({ [styles.checkboxContainer]: true, [styles.disabled]: disabled } )}>
            <input className={styles.checkbox} type="checkbox" checked={value} onChange={onCheck} disabled={disabled}/>
            <span className={styles.label}>{children}</span>
        </label>
    )
};

export {
    UiCheckbox,
}