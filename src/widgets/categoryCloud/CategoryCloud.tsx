import { useSelector } from "react-redux";

import { CategoryLabel, categoryListSelector, categorySelector } from "@/entities/category";
import { WidgetContainer, UiSkeleton, UiText } from "@/shared/ui";
import { CreateCategoryButton, EditCategoryButton } from '@/features/categoryForm';

import styles from './styles.module.less';

const CategoryCloud = () => {

    const categoryList = useSelector(categoryListSelector.selectAll);

    const { isLoadingCategoryList } = useSelector(categorySelector);

    const getSkeletonsLoading = () => {
        return (
            new Array(8).fill('').map((_, index) => <UiSkeleton key={index} width={100} height={40}/>)
        )
    };

    const getCategoryList = () => {
        if (!categoryList.length) {
            return <div className={styles.emptyPlaceholder}><UiText size="l">У вас пока нет категорий, но вы можете легко их добавить</UiText></div>
        }
        return categoryList.map(category => 
            <CategoryLabel 
                key={category.categoryId} 
                size="large" 
                isLoading={category.isLoading}
                controlPanel={<EditCategoryButton categoryId={category.categoryId} />}
            >
                {category.name}
            </CategoryLabel>
        );
    }

    return (
        <WidgetContainer widgetTitle="Категории" widgetHeight="auto">
            <div className={styles.categoryCloud}>
                <div className={styles.widgetHeader}>
                    <CreateCategoryButton/>
                </div>
                <div className={styles.categoryList}>
                    { isLoadingCategoryList ? getSkeletonsLoading() : getCategoryList() }
                </div>
            </div>
        </WidgetContainer>
    )
};

export {
    CategoryCloud,
}