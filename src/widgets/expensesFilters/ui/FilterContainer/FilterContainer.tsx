import type { FC, ReactNode } from "react";

import styles from "./styles.module.less";

interface Props {
	children: ReactNode;
	maxWidth: number;
}

const FilterContainer: FC<Props> = ({ children, maxWidth }) => {
	return (
		<div className={styles.container} style={{ maxWidth: `${maxWidth}px` }}>
			{children}
		</div>
	);
};

export { FilterContainer };
