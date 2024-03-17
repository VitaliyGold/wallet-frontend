import { createAsyncThunk } from "@reduxjs/toolkit";

import { Category } from "../../types/category";
import { getCategoryResponseAdapter, updateCategoryRequestAdapter } from "../../adapters";

import { getCategories, createCategory, removeCategory, updateCategory } from "../../api";

const getCategoryListThunks = createAsyncThunk('category/list', async () => {
    const categories = await getCategories();
    return categories.map(category => getCategoryResponseAdapter(category));
});

const createCategoryThunks = createAsyncThunk('category/create', async (name: string) => {
    const createdCategory = await createCategory(name);
    console.log(123)
    return getCategoryResponseAdapter(createdCategory);
});

const updateCategoryThunks = createAsyncThunk('category/update', async (category: Category) => {
    const updatedCategory = await updateCategory(updateCategoryRequestAdapter(category));
    return getCategoryResponseAdapter(updatedCategory);
});

const removeCategoryThunks = createAsyncThunk('category/remove', async (categoryId: string) => {
    const removedCategory = await removeCategory(categoryId);
    return getCategoryResponseAdapter(removedCategory);
});

export {
    getCategoryListThunks,
    createCategoryThunks,
    updateCategoryThunks,
    removeCategoryThunks,
};