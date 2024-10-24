import type { FC } from "react";

import { UiText, UiImage } from "@/shared/ui";

import EmptyCatPic from "../img/empty-cat.png";
import styles from "./styles.module.less";

interface Props {
	hasFilters: boolean;
}

export const EmptyPlaceholder: FC<Props> = ({ hasFilters }) => {
	return (
		<div className={styles.emptyPlaceholder}>
			<UiText size={"l"}>
				{hasFilters
					? "Нет ничего подходящего под фильтр"
					: "Нет трат за указанный период"}
			</UiText>
			<UiImage src={EmptyCatPic} width={350} />
		</div>
	);
};
