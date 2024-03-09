import { createAsyncThunk } from "@reduxjs/toolkit";

import { Category } from "../../types/category";
import { categoryAdapter, updateCategoryAdapter } from "../../adapters";

import { getCategories, createCategory, removeCategory, updateCategory } from "../../api";

const getCategoryListThunks = createAsyncThunk('category/list', async () => {
    const categories = await getCategories();
    return categories.map(category => categoryAdapter(category));
});

const createCategoryThunks = createAsyncThunk('category/list', async (name: string) => {
    const createdCategory = await createCategory(name);
    return categoryAdapter(createdCategory);
});

const updateCategoryThunks = createAsyncThunk('category/list', async (category: Category) => {
    const updatedCategory = await updateCategory(updateCategoryAdapter(category));
    return categoryAdapter(updatedCategory);
});

const removeCategoryThunks = createAsyncThunk('category/list', async (categoryId: string) => {
    const removedCategory = await removeCategory(categoryId);
    return categoryAdapter(removedCategory);
});

export {
    getCategoryListThunks,
    createCategoryThunks,
    updateCategoryThunks,
    removeCategoryThunks,
};