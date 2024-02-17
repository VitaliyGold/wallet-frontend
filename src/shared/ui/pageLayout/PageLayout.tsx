import type { FC, ReactNode } from "react";

import styles from './styles.module.less';

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className={styles.pageLayout}>
            { children }
        </div>
    )
};

export {
    PageLayout,
}