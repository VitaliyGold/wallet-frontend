import { forwardRef } from "react";
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './styles.module.less';

interface UiInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    label?: string;
}

const UiInput = forwardRef<HTMLInputElement, UiInputProps>(({ label, ...rest }, ref) => {
    return (
        <div className={styles.uiInput}>
            { label && <label className={styles.inputLabel}>{label}</label> }
            <input className={styles.inputElement} ref={ref} { ...rest }/>
        </div>
    )
});

export {
    UiInput,
}