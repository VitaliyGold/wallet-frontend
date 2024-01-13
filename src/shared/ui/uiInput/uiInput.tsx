import { forwardRef, memo } from "react";
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import styles from './styles.module.less';

interface UiInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    label?: string;
}

const UiInput = memo(forwardRef<HTMLInputElement, UiInputProps>(({ label, ...rest }, ref) => {
    console.log('рендер инпута')
    return (
        <div className={styles.uiInput}>
            { label && <label className={styles.inputLabel}>{label}</label> }
            <input className={styles.inputElement} ref={ref} { ...rest }/>
        </div>
    )
}));

export {
    UiInput,
}