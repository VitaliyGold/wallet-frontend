import type { DetailedHTMLProps, ButtonHTMLAttributes, Ref, ReactNode, MouseEvent } from "react";
import { forwardRef } from "react";
import cn from 'classnames';

import styles from './styles.module.less';

type ViewType = 'blue' | 'white' | 'transparent';

type ButtonSize = 'large' | 'medium' | 'small';

interface UiButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    viewType?: ViewType,
    size?: ButtonSize,
    children: ReactNode,
    addBefore?: ReactNode,
    outline?: boolean,
    onClick?: () => void;
}

const UiButton = forwardRef(({ viewType = 'blue', outline = false, children, addBefore, size = 'medium', onClick, ...rest } : UiButtonProps, ref: Ref<HTMLButtonElement>) => {

    return (
        <button className={ cn(styles.uiButton, styles[viewType], styles[size], outline ? styles['outline'] : '') } onClick={onClick} { ...rest} ref={ref}>
            { addBefore ?? addBefore }
            <span>
                { children }
            </span>
        </button>
    )
});

export {
    UiButton,
}