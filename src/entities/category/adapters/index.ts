import { CategoryApi } from "../types/api";
import { Category } from "../types/category";

const categoryAdapter = (data: CategoryApi): Category => {
    return {
        categoryId: data.category_id,
        name: data.name
    }
};

const updateCategoryAdapter = (updatedCategory: Category): CategoryApi => {
    return {
        category_id: updatedCategory.categoryId,
        name: updatedCategory.name,
    }
}

export {
    categoryAdapter,
    updateCategoryAdapter,
}