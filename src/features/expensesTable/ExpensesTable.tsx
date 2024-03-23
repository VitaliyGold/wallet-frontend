import type { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { createColumnHelper, useReactTable, getCoreRowModel } from '@tanstack/react-table';

import type { Expenses } from '@/entities/expenses/types/expenses';
import { CategoryLabel, categoryListSelector } from '@/entities/category';
import { formatDateToFront } from '@/shared/lib/dateMethods';

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

    const categoryDict = useSelector(categoryListSelector.selectEntities);

    const tableColumns = [
        columnHelper.accessor('expensesName', {
            header: 'Наименование',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('spendingDate', {
            header: 'Дата',
            cell: info => formatDateToFront(info.getValue()),
        }),
        columnHelper.accessor('amount', {
            header: 'Сумма',
            cell: info => <p>{ info.getValue() } ₽</p>,
        }),
        columnHelper.accessor('categoryIds', {
            header: 'Категории',
            cell: info =>  <CategoryCell categoryIds={info.getValue()}/>,
        }),
        columnHelper.accessor('tagIds', {
            header: 'Теги',
            cell: info => <p></p>,
        }),
    ];

    const table = useReactTable({ columns: tableColumns, data: expensesList, getCoreRowModel: getCoreRowModel() });

    return (
        <div className={styles.tableContainer}>
            <table className={styles.expensesTable}>
                <TableHeader headerConfig={table.getHeaderGroups()} />
            </table>
            <div className={styles.bodyContainer}>
                <table className={styles.expensesTable}>
                    <TableBody data={table.getRowModel()} />
                </table>
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