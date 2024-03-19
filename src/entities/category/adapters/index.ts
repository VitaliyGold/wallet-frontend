import { CategoryApi } from "../types/api";
import { Category, CategoryEntity } from "../types/category";

const getCategoryResponseAdapter = (data: CategoryApi): Category => {
    return {
        categoryId: data.category_id,
        name: data.name,
        isLoading: false,
    }
};

const updateCategoryRequestAdapter = (updatedCategory: CategoryEntity): CategoryApi => {
    return {
        category_id: updatedCategory.categoryId,
        name: updatedCategory.name,
    }
}

export {
    getCategoryResponseAdapter,
    updateCategoryRequestAdapter,
}