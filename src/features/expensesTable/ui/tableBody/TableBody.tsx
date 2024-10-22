import type { FC } from "react";
import { flexRender } from "@tanstack/react-table";
import type { RowModel } from "@tanstack/react-table";

import { Expenses } from "@/entities/expenses/types/expenses";
import styles from "./styles.module.less";

interface TableBodyProps {
	data: RowModel<Expenses>;
}

const TableBody: FC<TableBodyProps> = ({ data }) => {
	return (
		<div className={styles.tableBody}>
			{data.rows.map((row) => {
				return (
					<div
						key={row.original.expenseId}
						className={styles.tableRow}
					>
						{row.getVisibleCells().map((cell) => {
							return (
								<div
									key={cell.id}
									className={styles.cell}
									style={{
										maxWidth: cell.column.columnDef.maxSize,
									}}
								>
									{flexRender(
										cell.column.columnDef.cell,
										cell.getContext(),
									)}
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export { TableBody };
