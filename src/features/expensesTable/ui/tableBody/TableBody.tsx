import type { FC } from 'react';
import { flexRender } from '@tanstack/react-table';
import type { RowModel } from '@tanstack/react-table';

import { Expenses } from '@/entities/expenses/types/expenses';
import styles from './styles.module.less';

interface TableBodyProps {
    data: RowModel<Expenses>
}


const TableBody: FC<TableBodyProps> = ({ data }) => {
    return (
        <tbody>
            { 
                data.rows.map((row) => {
                    return (
                        <tr key={row.original.expenseId}>
                            {
                                row.getVisibleCells().map(cell => {
                                    return (
                                        <td key={cell.id} className={styles.cell}>
                                            { flexRender(cell.column.columnDef.cell, cell.getContext()) }
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                }) 
            }
        </tbody>
    )
};

export {
    TableBody,
}