import type { DetailedHTMLProps, ButtonHTMLAttributes, FC, ReactNode } from "react";
import cn from 'classnames';

import styles from './styles.module.less';

type ViewType = 'blue' | 'white';

type ButtonSize = 'large' | 'medium' | 'small';

interface UiButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    viewType?: ViewType,
    size?: ButtonSize,
    children: ReactNode,
}

const UiButton: FC<UiButtonProps> = ({ viewType = 'blue', children, size = 'medium', ...rest }) => {
    return (
        <button className={ cn(styles.uiButton, styles[viewType], styles[size]) } { ...rest}>
            <span>
                { children }
            </span>
        </button>
    )
};

export {
    UiButton,
}