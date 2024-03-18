import type { FC } from 'react';

import styles from './styles.module.less';

interface UiSkeletonProps {
    width: number;
    height: number;
}

const UiSkeleton: FC<UiSkeletonProps> = ({ width, height }) => {
    return (
        <div className={styles.skeleton} style={{ width: `${width}px`, height: `${height}px` }}></div>
    )
};

export {
    UiSkeleton,
}