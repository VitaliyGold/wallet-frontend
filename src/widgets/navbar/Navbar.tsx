import { useLocation } from "react-router-dom";

import { linksList } from "./consts";
import { NavbarItem } from "./ui/NavbarItem";
import styles from "./styles.module.less";

const Navbar = () => {
	const location = useLocation();

	const isActive = (link: string) => location.pathname === link;

	return (
		<nav className={styles.navbarContainer}>
			{linksList.map((link) => (
				<NavbarItem
					key={link.link}
					title={link.title}
					link={link.link}
					iconName={link.iconName}
					isActive={isActive(link.link)}
				/>
			))}
		</nav>
	);
};

export { Navbar };
