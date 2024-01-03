import { FC } from 'react';
import cn from 'classnames';

import Loader from '@/shared/assets/svg/loader.svg?react';
import styles from './styles.module.less';

interface UiLoaderProps {
    fullScreen?: boolean;
    size?: number;
}


const UiLoader: FC<UiLoaderProps> = ({ fullScreen = false, size = 50 }) => {

    return (
        <span className={cn(styles.ui_loader, fullScreen ? styles['full_screen'] : '')} style={{ width: `${size}px`, height: `${size}px` }}>
            <Loader width={size} heigth={size}/>
        </span>
    )
}

export {
    UiLoader,
}