import type { RootStore } from "@/app";

import { categoryEntityAdapter } from "./categorySlice";

const categoryListSelector = categoryEntityAdapter.getSelectors(
	(state: RootStore) => state.category,
);

const categorySelector = (state: RootStore) => state.category;

export { categoryListSelector, categorySelector };
