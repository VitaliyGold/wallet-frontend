import type { FC } from "react";
import { useSelector } from "react-redux";

import { CategoryLabel, categoryListSelector } from "@/entities/category";

import styles from './styles.module.less';

interface CategoryCellProps {
    categoryId: string | null;
}

const CategoryCell: FC<CategoryCellProps> = ({ categoryId }) => {
    const categoryDict = useSelector(categoryListSelector.selectEntities);
    if (!categoryId) {
        return null;
    }

    return (
        <div className={styles.categoryCell}>
            <CategoryLabel key={categoryId} color={categoryDict[categoryId].color} outline={true}>{ categoryDict[categoryId].name ?? '-' }</CategoryLabel>
        </div>
    )
};

export {
    CategoryCell,
}