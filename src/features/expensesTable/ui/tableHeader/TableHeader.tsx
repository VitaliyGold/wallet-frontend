import { FC } from "react";
import type { HeaderGroup } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

import { Expenses } from "@/entities/expenses/types/expenses";

import styles from "./styles.module.less";

interface TableHeaderProps {
	headerConfig: HeaderGroup<Expenses>[];
}

const TableHeader: FC<TableHeaderProps> = ({ headerConfig }) => {
	return (
		<thead key={headerConfig[0].id}>
			<tr className={styles.headerRow}>
				{headerConfig[0].headers.map((header) => {
					return (
						<th key={header.id}>
							{header.isPlaceholder
								? null
								: flexRender(
										header.column.columnDef.header,
										header.getContext(),
									)}
						</th>
					);
				})}
			</tr>
		</thead>
	);
};

export { TableHeader };
