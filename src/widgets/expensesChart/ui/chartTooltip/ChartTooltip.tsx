import type { FC } from "react";
import { memo } from "react";

import { UiText } from "@/shared/ui";

import styles from "./styles.module.less";

interface Props {
	categoryName?: string;
	amount: number;
}

const ChartTooltip: FC<Props> = memo(({ categoryName, amount }) => {
	return (
		<div className={styles.tooltip}>
			<UiText color="white">
				{categoryName} - {amount} ₽
			</UiText>
		</div>
	);
});

ChartTooltip.displayName = "ChartTooltip";

export { ChartTooltip };
