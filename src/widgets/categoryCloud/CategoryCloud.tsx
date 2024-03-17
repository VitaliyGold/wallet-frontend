import { useSelector } from "react-redux";

import { CategoryLabel, categoryListSelector } from "@/entities/category";
import { WidgetContainer } from "@/shared/ui";

import styles from './styles.module.less';

const CategoryCloud = () => {

    const categoryList = useSelector(categoryListSelector.selectAll);

    return (
        <WidgetContainer widgetTitle="Категории" widgetHeight="auto">
            <div className={styles.categoryCloud}>
                { categoryList.map(category => <CategoryLabel size="large">{category.name}</CategoryLabel>) }
            </div>
        </WidgetContainer>
    )
};

export {
    CategoryCloud,
}