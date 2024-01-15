import type { DetailedHTMLProps, ButtonHTMLAttributes, FC } from "react";
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
}

const UiIconButton: FC<IconButtonProps> = ({ iconType, size = IconSizes['medium'], viewType = 'gray', outline = false, ...rest }) => {
    return (
        <button className={cn(styles.iconButton, styles[viewType], outline ? styles['outline'] : '')} { ...rest }>
            <Icon iconType={iconType} size={size}/>
        </button>
    )
}

export {
    UiIconButton,
}