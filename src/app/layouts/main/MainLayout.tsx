import { ReactNode, FC } from "react";

import { Header } from "@/widgets/header";
import { Navbar } from "@/widgets/navbar";
import styles from './styles.module.less';

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header/>
            <main className={styles.mainContainer}>
                <Navbar/>
                <div className={styles.contentContainer}>
                    { children }
                </div>
            </main>
        </>
    )
};

export {
    MainLayout,
}