import { forwardRef, memo } from "react";
import cn from 'classnames';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import styles from './styles.module.less';

interface UiInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    label?: string;
    labelPosition?: 'top' | 'left'
}

const UiInput = memo(forwardRef<HTMLInputElement, UiInputProps>(({ label, labelPosition = 'top', ...rest }, ref) => {
    return (
        <div className={cn(styles.uiInput, styles[`${labelPosition}Label`])}>
            { label && <label className={styles.inputLabel}>{label}</label> }
            <input className={styles.inputElement} ref={ref} { ...rest }/>
        </div>
    )
}));

export {
    UiInput,
}