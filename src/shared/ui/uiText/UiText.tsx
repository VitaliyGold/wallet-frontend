import cn from 'classnames';
import type { FC, ReactNode } from 'react';

import styles from './styles.module.less';

type TextSize = 'xs' | 's' | 'l' | 'xl';

interface UiTextProps {
    tag?: 'span' | 'p',
    size?: TextSize,
    color?: 'black' | 'gray' | 'white' | 'inherit' | 'green' | 'red',
    children: ReactNode,
}

const UiText: FC<UiTextProps> = ({ tag = 'p', size = 'l', color = 'inherit', children }) => {

    const textStyle = cn([styles.uiText, styles[`textSize_${size}`], styles[`textColor_${color}`]])

    if (tag === 'p') {
        return <p className={textStyle}>{children}</p>
    }
    return <span className={textStyle}>{children}</span>
};

export {
    UiText,
}