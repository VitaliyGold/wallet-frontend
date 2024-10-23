import type { FC, ReactNode } from "react";
import { useSelector } from "react-redux";

import { CategoryLabel, categoryListSelector } from "@/entities/category";
import { UiText } from "@/shared/ui";

import styles from "./styles.module.less";

interface Props {
	children: ReactNode;
	categoryId: null | string;
}

export const ExpensesNameCell: FC<Props> = ({ children, categoryId }) => {
	const categoryDict = useSelector(categoryListSelector.selectEntities);

	return (
		<div className={styles.cell}>
			<UiText>{children}</UiText>
			{categoryId && (
				<CategoryLabel
					key={categoryId}
					color={categoryDict[categoryId]?.color}
					outline={true}
				>
					{categoryDict[categoryId]?.name ?? "-"}
				</CategoryLabel>
			)}
		</div>
	);
};
