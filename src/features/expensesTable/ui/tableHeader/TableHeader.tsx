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
        <div className={styles.headerRow} key={headerConfig[0].id}>
        {
            headerConfig[0].headers.map(header => {
                return (
                    <div
                        className={cn(styles.cell, styles.headerCell)}
                        key={header.id}
                        style={{ maxWidth: header.column.columnDef.maxSize }}
                    >
                        {
                            header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )
                        }
                    </div>
                )
            })
        }
    </div>
    )
};

export {
    TableHeader,
}