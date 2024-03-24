import type { FC, ReactNode } from 'react';
import { createColumnHelper, useReactTable, getCoreRowModel } from '@tanstack/react-table';

import type { Expenses } from '@/entities/expenses/types/expenses';
import { formatDateToFront } from '@/shared/lib/dateMethods';
import { UiText } from '@/shared/ui';

import { CategoryCell } from './ui/CategoryCell';
import styles from './styles.module.less';
import { TableBody } from './ui/tableBody/TableBody';
import { TableHeader } from './ui/tableHeader/TableHeader';


interface ExpensesTableProps {
    expensesList: Expenses[];
    infinityLoadingElement?: ReactNode;
}

const ExpensesTable: FC<ExpensesTableProps> = ({ expensesList, infinityLoadingElement }) => {

    const columnHelper = createColumnHelper<Expenses>();

    const tableColumns = [
        columnHelper.accessor('expensesName', {
            header: 'Наименование',
            cell: info => <UiText>{info.getValue()}</UiText>
        }),
        columnHelper.accessor('spendingDate', {
            header: 'Дата',
            cell: props => <UiText>{formatDateToFront(props.getValue())}</UiText>,
            maxSize: 120
        }),
        columnHelper.accessor('amount', {
            header: 'Сумма',
            cell: props => <UiText>{ props.getValue() } ₽</UiText>,
            maxSize: 90
        }),
        columnHelper.accessor('categoryIds', {
            id: 'categoryIds',
            header: 'Категории',
            cell: props => <CategoryCell categoryIds={props.getValue()}/>,
        }),
        columnHelper.accessor('tagIds', {
            header: 'Теги',
            cell: info => <p></p>,
        }),
    ];

    const table = useReactTable({ columns: tableColumns, data: expensesList, getCoreRowModel: getCoreRowModel() });

    return (
        <div className={styles.tableContainer}>
            <TableHeader headerConfig={table.getHeaderGroups()} />
            <div className={styles.scrollable}>
            <TableBody data={table.getRowModel()} />
            {
                infinityLoadingElement
                ?? 
                null
            }
            </div>
        </div>
    )
};

export {
    ExpensesTable,
}