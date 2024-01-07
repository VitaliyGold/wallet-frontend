import { FC } from 'react';
import cn from 'classnames';
import type { HeaderGroup } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import { Expenses } from '@/entities/expenses/types/expenses';


import styles from './styles.module.less';

interface TableHeaderProps {
    headerConfig: HeaderGroup<Expenses>[]
}

const TableHeader: FC<TableHeaderProps> = ({ headerConfig }) => {
    return (
        <thead className={styles.tableHeader}>
                    {
                        headerConfig.map(headerGroup => (
                            <tr className={styles.headerRow} key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header => {
                                        return (
                                            <th
                                                className={cn(styles.cell, styles.headerCell)}
                                                style={{ width: header.column.getSize() }}
                                                key={header.id}
                                            >
                                                {
                                                    header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )
                                                }
                                            </th>
                                        )
                                    })
                                }
                            </tr>
                        ))
                    }
                </thead>
    )
};

export {
    TableHeader,
}