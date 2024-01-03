import { FC } from "react";
import cn from 'classnames';
import { Link } from "react-router-dom";
import { Icon } from '@/shared/ui';

import styles from './styles.module.less';
import type { INavbarItem } from "../types/types";

type NavbarItemProps = INavbarItem & { isActive: boolean };

const NavbarItem: FC<NavbarItemProps> = ({ title, link, iconName, isActive }) => {
    return (
        <Link to={link}>
            <div className={cn(styles.navbarItem, isActive ? styles.active : '')} title={title}>
                <div className={styles.navbarImage}>
                    <Icon iconType={iconName} size={30}/>
                </div>
            </div>
        </Link>
    )
};


export {
    NavbarItem,
}