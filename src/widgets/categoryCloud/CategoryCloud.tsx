import { useSelector } from "react-redux";

import { categoryListSelector, categorySelector } from "@/entities/category";
import { WidgetContainer, UiSkeleton, UiText } from "@/shared/ui";
import { CreateCategoryButton } from "@/features/categoryForm";

import styles from "./styles.module.less";
import { CategoryItem } from "./ui/CategoryItem/CategoryItem";

const CategoryCloud = () => {
	const categoryList = useSelector(categoryListSelector.selectAll);

	const { isLoadingCategoryList } = useSelector(categorySelector);

	const getSkeletonsLoading = () => {
		return new Array(8)
			.fill("")
			.map((_, index) => (
				<UiSkeleton key={index} width={100} height={40} />
			));
	};

	const getCategoryList = () => {
		if (!categoryList.length) {
			return (
				<div className={styles.emptyPlaceholder}>
					<UiText size="l">
						У вас пока нет категорий, но вы можете легко их добавить
					</UiText>
				</div>
			);
		}
		return categoryList.map((category) => (
			<CategoryItem
				key={category.categoryId}
				name={category.name}
				color={category.color}
				categoryId={category.categoryId}
				isLoading={category.isLoading}
			/>
		));
	};

	return (
		<WidgetContainer widgetTitle="Категории" widgetHeight="auto">
			<div className={styles.categoryCloud}>
				<div className={styles.widgetHeader}>
					<CreateCategoryButton />
				</div>
				<div className={styles.categoryList}>
					{isLoadingCategoryList
						? getSkeletonsLoading()
						: getCategoryList()}
				</div>
			</div>
		</WidgetContainer>
	);
};

export { CategoryCloud };
