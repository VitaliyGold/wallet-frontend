import type { DetailedHTMLProps, ButtonHTMLAttributes, FC, MouseEvent } from "react";
import cn from 'classnames';

import type { IconsTypes } from "@/shared/ui";
import { Icon } from "@/shared/ui";

import styles from './styles.module.less';

type IconButtonViewType = 'gray' | 'white';

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
    onClick: () => void;
}

const UiIconButton: FC<IconButtonProps> = ({ iconType, size = IconSizes['medium'], viewType = 'gray', outline = false, onClick, ...rest }) => {

    const onClickStopPropagation = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (onClick) onClick();
    }

    return (
        <button className={cn(styles.iconButton, styles[viewType], outline ? styles['outline'] : '')} onClick={onClickStopPropagation} { ...rest }>
            <Icon iconType={iconType} size={size}/>
        </button>
    )
}

export {
    UiIconButton,
}