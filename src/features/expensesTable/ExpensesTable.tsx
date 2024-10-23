import type { FC, ReactNode } from "react";
import {
	createColumnHelper,
	useReactTable,
	getCoreRowModel,
} from "@tanstack/react-table";

import type { Expenses } from "@/entities/expenses/types/expenses";
import { formatDateToFront } from "@/shared/lib/dateMethods";
import { UiText } from "@/shared/ui";

import { ExpensesNameCell } from "./ui/ExpensesNameCell";
import { AmountCell } from "./ui/AmountCell";
import styles from "./styles.module.less";
import { TableBody } from "./ui/tableBody/TableBody";
import { TableHeader } from "./ui/tableHeader/TableHeader";
import { HeaderCell } from "./ui/HeaderCell/index";

interface ExpensesTableProps {
	expensesList: Expenses[];
	infinityLoadingElement?: ReactNode;
}

const ExpensesTable: FC<ExpensesTableProps> = ({
	expensesList,
	infinityLoadingElement,
}) => {
	const columnHelper = createColumnHelper<Expenses>();

	const tableColumns = [
		columnHelper.accessor("expensesName", {
			header: () => <HeaderCell maxSize={150}>Наименование</HeaderCell>,
			cell: (info) => (
				<ExpensesNameCell
					categoryId={info.cell.row.original.categoryId}
				>
					{info.getValue()}
				</ExpensesNameCell>
			),
		}),
		columnHelper.accessor("spendingDate", {
			header: () => <HeaderCell maxSize={100}>Дата</HeaderCell>,
			cell: (props) => (
				<UiText>{formatDateToFront(props.getValue())}</UiText>
			),
			maxSize: 120,
		}),
		columnHelper.accessor("amount", {
			header: () => <HeaderCell maxSize={100}>Сумма</HeaderCell>,
			cell: (props) => (
				<AmountCell
					amountDirection={props.row.original.amountDirection}
				>
					{props.getValue()} ₽
				</AmountCell>
			),
			maxSize: 90,
		}),
	];

	const table = useReactTable({
		columns: tableColumns,
		data: expensesList,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className={styles.scrollable}>
			<table className={styles.tableContainer}>
				<TableHeader headerConfig={table.getHeaderGroups()} />
				<TableBody data={table.getRowModel()} />
			</table>
			{infinityLoadingElement ?? null}
		</div>
	);
};

export { ExpensesTable };
