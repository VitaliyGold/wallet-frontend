import { Icon } from "@/shared/ui";

import styles from "./styles.module.less";

const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<p className={styles.userName}>Виталий</p>
			<div className={styles.userPic}>
				<Icon iconType={"user"} size={30} />
			</div>
		</header>
	);
};

export { Header };
