import type { FC, ReactNode } from "react";

import { UiText } from "@/shared/ui";

interface Props {
	children: ReactNode;
	maxSize: number;
}

export const HeaderCell: FC<Props> = ({ children, maxSize }) => {
	return (
		<div style={{ maxWidth: `${maxSize}px` }}>
			<UiText>{children}</UiText>
		</div>
	);
};
