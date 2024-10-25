import type { FC } from "react";
import cn from "classnames";

import { UiIconButton, UiText } from "@/shared/ui";

import styles from "./styles.module.less";
import type { ToastEntity } from "../types";
import { TOASTER_TYPES } from "../types";
import { useToast } from "../hooks/useToast";

export const Toast: FC<ToastEntity> = ({
	title,
	message,
	id,
	type = TOASTER_TYPES.default,
}) => {
	const { removeToast } = useToast();

	return (
		<div className={cn(styles.toast, styles[type])}>
			<UiIconButton
				className={styles.closeButton}
				outline={false}
				withoutPaddings={true}
				iconType="remove"
				onClick={() => removeToast(id)}
			/>
			<div className={styles.toastContent}>
				<UiText size="l">{title}</UiText>
				{message && <UiText size="s">{message}</UiText>}
			</div>
		</div>
	);
};
