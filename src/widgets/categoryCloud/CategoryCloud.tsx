import { useSelector } from "react-redux";

import { CategoryLabel, categoryListSelector } from "@/entities/category";
import { WidgetContainer } from "@/shared/ui";
import { CreateCategoryButton } from '@/features/categoryForm';

import styles from './styles.module.less';

const CategoryCloud = () => {

    const categoryList = useSelector(categoryListSelector.selectAll);
    console.log(categoryList)
    return (
        <WidgetContainer widgetTitle="Категории" widgetHeight="auto">
            <div className={styles.categoryCloud}>
                <div className={styles.widgetHeader}>
                    <CreateCategoryButton/>
                </div>
                <div className={styles.categoryList}>
                    { categoryList.map(category => <CategoryLabel key={category.categoryId} size="large">{category.name}</CategoryLabel>) }
                </div>
            </div>
        </WidgetContainer>
    )
};

export {
    CategoryCloud,
}