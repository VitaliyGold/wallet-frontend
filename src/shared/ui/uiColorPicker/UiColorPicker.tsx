import type { ChangeEvent, Ref } from 'react';
import cn from 'classnames';
import { forwardRef } from 'react';

import { UiInput } from '@/shared/ui';

import styles from './styles.module.less';
import { colorsList } from './const';

interface UiColorPickerProps {
    onChange: (color: string) => void;
    value: string;
}



const UiColorPicker = forwardRef(({ onChange, value }: UiColorPickerProps, ref: Ref<HTMLInputElement>) => {

    const onChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (
        <div className={styles.colorPicker}>
            <div className={styles.colorInput}>
                <span className={cn(styles.color, styles.currentColor)} style={{ backgroundColor: value }}></span>
                <UiInput value={value} onChange={onChangeColor} ref={ref}/>
            </div>
            <div className={styles.colorsList}>
                { colorsList.map(({ color, title }) => <div className={styles.color} title={title} style={{ backgroundColor: color }} onClick={() => onChange(color)}/>) }
            </div>
        </div>
    )
});

export {
    UiColorPicker,
}