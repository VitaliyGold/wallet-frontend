import type { DetailedHTMLProps, ButtonHTMLAttributes, FC, MouseEvent, Ref } from "react";
import { forwardRef } from "react";
import cn from 'classnames';

import type { IconsTypes } from "@/shared/ui";
import { Icon } from "@/shared/ui";

import styles from './styles.module.less';

type IconButtonViewType = 'gray' | 'white' | 'blue' | 'transparent';

enum IconSizes {
    'small' = 14,
    'medium' = 18,
    'large' = 22,
}

interface IconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    iconType: IconsTypes;
    size?: IconSizes;
    viewType?: IconButtonViewType;
    outline?: boolean;
    withoutPaddings?: boolean;
    onClick: () => void;
}

const UiIconButton = forwardRef(({ iconType, size = IconSizes['medium'], viewType = 'gray', outline = false, withoutPaddings = true, onClick, ...rest } : IconButtonProps, ref: Ref<HTMLButtonElement>) => {

    const onClickStopPropagation = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (onClick) onClick();
    }

    return (
        <button className={cn(styles.iconButton, { [styles[viewType]]: true, [styles.outline]: outline, [styles.withoutPaddings]: withoutPaddings })} onClick={onClickStopPropagation} { ...rest } ref={ref}>
            <Icon iconType={iconType} size={size}/>
        </button>
    )
})

export {
    UiIconButton,
}