import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import type { Category } from "../types/category";
import { getCategoryListThunks } from "./thunks/categoryThunks";

const categoryEntityAdapter = createEntityAdapter({
    selectId: (category: Category) => category.categoryId,
})


const CategorySlice = createSlice({
    name: 'categorySlice',
    initialState: categoryEntityAdapter.getInitialState({
        isLoadingCategoryList: false,
    }),
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getCategoryListThunks.fulfilled, (state, action) => {
            categoryEntityAdapter.addMany(state, action.payload);
            state.isLoadingCategoryList = false;
        })
    }
});

export const { actions: categoryActions, reducer: categoryReducer } = CategorySlice;

export {
    categoryEntityAdapter,
}