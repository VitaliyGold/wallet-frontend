import { CategoryApi } from "../types/api";
import { Category, CategoryEntity } from "../types/category";

const getCategoryResponseAdapter = (data: CategoryApi): Category => {
    return {
        categoryId: data.category_id,
        name: data.name,
        color: data.color,
        isLoading: false,
        isHidden: false,
    }
};

const updateCategoryRequestAdapter = (updatedCategory: CategoryEntity): CategoryApi => {
    return {
        category_id: updatedCategory.categoryId,
        name: updatedCategory.name,
        color: updatedCategory.color,
    }
}

export {
    getCategoryResponseAdapter,
    updateCategoryRequestAdapter,
}