import type { FC, ChangeEvent } from 'react';

import styles from './styles.module.less';

interface RadioButtonOption {
    value: string;
    label: string;
}

interface UiRadioGroupProps {
    value: string;
    options: RadioButtonOption[];
    onChange: (newValue: string) => void;
    label?: string;
}

const UiRadioGroup: FC<UiRadioGroupProps> = ({ value, options, onChange, label }) => {
    return (
        <div className={styles.radioGroup}>
            { label && <label>{label}</label> }
            {
                options.map(option => (
                    <div className={styles.radioButton}>
                        <input type="radio" checked={option.value === value} onChange={() => onChange(option.value)}></input>
                        <label htmlFor={option.value}>
                            { option.label }
                        </label>
                    </div>
                ))
            }
        </div>
    )
};

export {
    UiRadioGroup,
}