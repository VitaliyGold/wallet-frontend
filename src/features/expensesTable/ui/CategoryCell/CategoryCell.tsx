import type { FC } from "react";
import { useSelector } from "react-redux";

import { CategoryLabel, categoryListSelector } from "@/entities/category";

import styles from './styles.module.less';

interface CategoryCellProps {
    categoryIds: string[];
}

const CategoryCell: FC<CategoryCellProps> = ({ categoryIds }) => {

    const categoryDict = useSelector(categoryListSelector.selectEntities);

    return (
        <div className={styles.categoryCell}>
            { categoryIds.map(categoryId => <CategoryLabel>{ categoryDict[categoryId].name ?? '-' }</CategoryLabel>) }
        </div>
    )
};

export {
    CategoryCell,
}