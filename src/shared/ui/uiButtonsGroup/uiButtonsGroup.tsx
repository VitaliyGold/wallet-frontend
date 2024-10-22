import { FC, ReactNode } from "react";
import cn from "classnames";

import styles from "./styles.module.less";

type ButtonGroupPosition = "end" | "center" | "start";

interface ButtonsGroupProps {
	children: ReactNode;
	position?: ButtonGroupPosition;
}

const UiButtonsGroup: FC<ButtonsGroupProps> = ({
	children,
	position = "end",
}) => {
	return (
		<div className={cn(styles.buttonsGroup, styles[position])}>
			{children}
		</div>
	);
};

export { UiButtonsGroup };
