import { fetcher } from "@/shared/lib/fetcher";

import {
	GetCategoryRequest,
	CreateCategoryRequest,
	UpdateCategoryRequest,
	RemoveCategoryRequest,
} from "../types/api";

const getCategories: GetCategoryRequest = () => {
	return fetcher.get("categories", {});
};

const createCategory: CreateCategoryRequest = (createdCategory) => {
	return fetcher.post("categories", createdCategory);
};

const removeCategory: RemoveCategoryRequest = (categoryId) => {
	const query = {
		category_id: categoryId,
	};
	return fetcher.delete("categories", query);
};

const updateCategory: UpdateCategoryRequest = (updatedCategory) => {
	return fetcher.update("categories", updatedCategory);
};

export { getCategories, createCategory, removeCategory, updateCategory };
