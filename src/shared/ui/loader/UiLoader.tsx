import { FC, RefObject } from 'react';

import Loader from '@/shared/assets/svg/loader.svg?react';
import styles from './styles.module.less';

interface UiLoaderProps {
    size?: number;
}


const UiLoader: FC<UiLoaderProps> = ({ size = 50 }) => {

    return (
        <div className={styles.loaderContainer}>
            <span className={styles.uiLoader} style={{ width: `${size}px`, height: `${size}px` }}>
                <Loader width={size} heigth={size}/>
            </span>
        </div>
    )
}

export {
    UiLoader,
}