import type { FC } from "react";
import { memo } from "react";
import cn from "classnames";

import { UiText, Icon, UiLoader, UiIconButton } from "@/shared/ui";

import styles from "./styles.module.less";

interface UiSelectHeaderProps {
	currentLabel: string[];
	currentValuePlaceholder?: string;
	isLoading?: boolean;
	multiply?: boolean;
	onClear: () => void;
}

const UiSelectHeader: FC<UiSelectHeaderProps> = memo(
	({
		currentLabel,
		currentValuePlaceholder = "Выберите",
		isLoading,
		multiply = false,
		onClear,
	}) => {
		const currentLabelText = () => {
			if (!currentLabel.length) {
				return currentValuePlaceholder;
			} else if (multiply) {
				return `Выбрано: ${currentLabel.length}`;
			} else {
				return currentLabel[0] ?? "";
			}
		};

		return (
			<div
				className={cn(
					styles.uiSelectHeader,
					isLoading ? styles.loading : "",
				)}
			>
				{isLoading ? (
					<UiLoader size={22} />
				) : (
					<>
						<div className={styles.label}>
							<UiText
								color={currentLabel.length ? "inherit" : "gray"}
							>
								{currentLabelText()}
							</UiText>
						</div>
					</>
				)}
				<Icon iconType="down" size={20} />
				<UiIconButton
					type="button"
					iconType="remove"
					onClick={onClear}
				/>
			</div>
		);
	},
);

UiSelectHeader.displayName = "UiSelectHeader";

export { UiSelectHeader };
