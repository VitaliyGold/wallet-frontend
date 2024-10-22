import { FC } from "react";

import { UiButton } from "@/shared/ui";

import styles from "./styles.module.less";

interface Props {
	onRetry: () => void;
}

const ErrorChart: FC<Props> = ({ onRetry }) => {
	return (
		<div className={styles.errorWrapper}>
			<UiButton onClick={onRetry}>Попробовать снова</UiButton>
		</div>
	);
};

export { ErrorChart };
