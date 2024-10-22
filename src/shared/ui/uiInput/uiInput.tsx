import { forwardRef, memo } from "react";
import cn from "classnames";
import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

import styles from "./styles.module.less";

interface UiInputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label?: string;
	labelPosition?: "top" | "left";
	errorMessage?: string;
}

const UiInput = memo(
	forwardRef<HTMLInputElement, UiInputProps>(
		({ label, labelPosition = "top", errorMessage = "", ...rest }, ref) => {
			return (
				<div
					className={cn(
						styles.uiInput,
						styles[`${labelPosition}Label`],
					)}
				>
					{label && (
						<label className={styles.inputLabel}>{label}</label>
					)}
					<input
						className={styles.inputElement}
						ref={ref}
						{...rest}
					/>
					{errorMessage && (
						<p className={styles.errorMessage}>{errorMessage}</p>
					)}
				</div>
			);
		},
	),
);

export { UiInput };
