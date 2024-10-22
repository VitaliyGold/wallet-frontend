import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Category } from "../types/category";
import { getCategoryListThunks } from "./thunks/categoryThunks";

const categoryEntityAdapter = createEntityAdapter({
	selectId: (category: Category) => category.categoryId,
});

const CategorySlice = createSlice({
	name: "categorySlice",
	initialState: categoryEntityAdapter.getInitialState({
		isLoadingCategoryList: true,
	}),
	reducers: {
		addNewCategory(state, { payload }: PayloadAction<Category>) {
			categoryEntityAdapter.addOne(state, payload);
		},
		updateCategory(
			state,
			{
				payload,
			}: PayloadAction<{ updatedId: string; category: Category }>,
		) {
			categoryEntityAdapter.updateOne(state, {
				id: payload.updatedId,
				changes: payload.category,
			});
		},
		removeCategory(state, { payload }: PayloadAction<string>) {
			categoryEntityAdapter.removeOne(state, payload);
		},
	},
	extraReducers(builder) {
		builder.addCase(getCategoryListThunks.fulfilled, (state, action) => {
			categoryEntityAdapter.addMany(state, action.payload);
			state.isLoadingCategoryList = false;
		});
	},
});

export const { actions: categoryActions, reducer: categoryReducer } =
	CategorySlice;

export { categoryEntityAdapter };
