import type { FC, ReactNode } from "react";

import { AmountDirection } from "@/entities/expenses";
import { UiText } from "@/shared/ui";

interface AmountCellProps {
	children: ReactNode;
	amountDirection: AmountDirection;
}

const AmountCell: FC<AmountCellProps> = ({ amountDirection, children }) => {
	return (
		<UiText color={amountDirection === "incomes" ? "green" : "red"}>
			{children}
		</UiText>
	);
};

export { AmountCell };
