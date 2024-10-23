import type { FC } from 'react';

import styles from './styles.module.less';

interface Props {
    src: string;
    width?: number;
}


export const UiImage: FC<Props> = ({ src, width }) => {
    return (
        <img className={styles.image} src={src} style={{ width: width ? `${width}px` : '100%' }}/>
    )
}