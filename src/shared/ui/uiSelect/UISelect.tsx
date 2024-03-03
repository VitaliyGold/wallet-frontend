import type { FC } from 'react';
import { useState, useMemo } from 'react';
import { useFloating, autoUpdate, useClick, useInteractions, useDismiss, offset } from '@floating-ui/react';

import { UiSelectHeader } from './ui/UiSelectHeader/UiSelectHeader';
import { UiSelectBody } from './ui/UiSelectBody/UiSelectBody';
import { UiOption } from './ui/Option/UiOption';

import styles from './styles.module.less';
import { IUiOption } from './types';
import { UiText } from '../uiText';

interface UiSelectProps {
    options: IUiOption[];
    currentValue: string[] | string;
    multiply?: boolean;
    onSelected: (selectedValue: string, isSelected: boolean) => void;
    onClose?: () => void;
    isOptionLoading?: boolean;
    currentValuePlaceholder?: string;
}

const UiSelect: FC<UiSelectProps> = ({ options, currentValue, multiply = false, onSelected, onClose, currentValuePlaceholder }) => {

    const [ isBodyOpened, setBodyOpened ] = useState(false);

    const onSelect = (checked: boolean, value: string) => {
        if (!multiply) {
            triggerOpen(false);
        }
        onSelected(value, checked);
    }

    const triggerOpen = (isOpen: boolean) => {
        if (!isOpen && onClose) {
            onClose();
        }
        setBodyOpened(isOpen);

    }

    const currentValuesMap = useMemo(() => {
        const values = new Map();
        for (let option of options) {
            if (Array.isArray(currentValue) && currentValue.find(value => value === option.value)) {
                values.set(option.value, option.label);
            } else if (option.value === currentValue) {
                values.set(currentValue, option.label);
                break;
            }
        }
        return values;
    }, [options.length, currentValue]);

    const { refs, floatingStyles, context } = useFloating({
        placement: 'bottom-start',
        strategy: 'absolute',
        open: isBodyOpened,
        onOpenChange: setBodyOpened,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
        ]
    });

    const dismiss = useDismiss(context);

    const click = useClick(context);

    const {getReferenceProps, getFloatingProps} = useInteractions([
        click, dismiss,
      ]);

    const getSelectBodyContent = () => {
        if (options && options.length) {
            return options.map((option) => <UiOption 
                label={option.label} 
                key={option.value} 
                isSelected={currentValuesMap.has(option.value)} 
                onSelect={(check) => onSelect(check, option.value)}/>
            ) 
        }
        return (
            <div className={styles.emptyBody}>
                <UiText color="gray">Выбора нет</UiText>
            </div>
        )
    }

    return (
        <div className={styles.selectContainer}>
            <div ref={refs.setReference} { ...getReferenceProps()} className={styles.headerContainer}>
                <UiSelectHeader currentLabel={Array.from(currentValuesMap.values())} currentValuePlaceholder={currentValuePlaceholder}/>
            </div>
           { isBodyOpened &&
                <div ref={refs.setFloating} style={{ ...floatingStyles, width: '100%' }} {...getFloatingProps()}>
                    <UiSelectBody>
                        {
                            getSelectBodyContent()
                        }
                    </UiSelectBody>
                </div>
            }
        </div>
    )
};

export {
    UiSelect,
}