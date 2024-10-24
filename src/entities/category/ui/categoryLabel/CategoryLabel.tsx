import type { ReactNode } from "react";
import { useMemo, forwardRef } from "react";
import cn from "classnames";

import { UiText, BackgroundLoading } from "@/shared/ui";
import { isDarkColor } from "@/shared/lib/isDarkColor";

import styles from "./styles.module.less";

interface CategoryLabelProps {
	children: ReactNode;
	size?: "small" | "large";
	outline?: boolean;
	controlPanel?: ReactNode;
	isLoading?: boolean;
	color: string;
	id?: string;
}

const CategoryLabel = forwardRef<HTMLDivElement, CategoryLabelProps>(
	(
		{
			children,
			size = "small",
			isLoading = false,
			controlPanel = null,
			color,
			outline = false,
		},
		ref,
	) => {
		const isDarkLabel = useMemo(() => isDarkColor(color), [color]);

		const labelStyles = cn({
			[styles.categoryLabel]: true,
			[styles[`${size}Label`]]: true,
			[styles.dark]: isDarkLabel,
			[styles.outline]: outline,
		});

		return (
			<div
				ref={ref}
				className={labelStyles}
				style={{ backgroundColor: color }}
			>
				<UiText size={size === "small" ? "xs" : "l"}>{children}</UiText>
				{isLoading && <BackgroundLoading />}
				{controlPanel && (
					<div className={styles.controlPanel}>{controlPanel}</div>
				)}
			</div>
		);
	},
);

export { CategoryLabel };
