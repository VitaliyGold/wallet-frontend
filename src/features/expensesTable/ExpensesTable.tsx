import type { FC } from 'react';
import cn from 'classnames';
import { createColumnHelper, useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

import type { Expenses } from '@/entities/expenses/types/expenses';
import styles from './styles.module.less';
import { TableBody } from './ui/tableBody/TableBody';
import { TableHeader } from './ui/tableHeader/TableHeader';

interface ExpensesTableProps {
    expensesList: Expenses[];
}

const ExpensesTable: FC<ExpensesTableProps> = ({ expensesList }) => {

    const columnHelper = createColumnHelper<Expenses>();

    const tableColumns = [
        columnHelper.accessor('expensesName', {
            header: 'Наименование',
            cell: info => info.getValue(),
            size: 400,
        }),
        columnHelper.accessor('spendingDate', {
            header: 'Дата',
            cell: info => info.renderValue(),
            size: 200
        }),
        columnHelper.accessor('amount', {
            header: 'Сумма',
            cell: info => <p>{ info.getValue() } ₽</p>,
            size: 200
        }),
        columnHelper.accessor('categoryIds', {
            header: 'Категории',
            cell: info => <p></p>,
            size: 300
        }),
        columnHelper.accessor('tagIds', {
            header: 'Теги',
            cell: info => <p></p>,
            size: 300
        }),
    ];

    const table = useReactTable({ columns: tableColumns, data: expensesList, getCoreRowModel: getCoreRowModel() });

    return (
        <div>
            <table className={styles.expensesTable}>
                <TableHeader headerConfig={table.getHeaderGroups()} />
                <TableBody data={table.getRowModel()} />
            </table>
        </div>
    )
};

export {
    ExpensesTable,
}