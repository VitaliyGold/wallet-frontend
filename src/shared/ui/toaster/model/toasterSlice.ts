import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import type { ToastEntity } from "../types";

const toasterAdapter = createEntityAdapter({
	selectId: (toast: ToastEntity) => toast.id,
});

const ToasterSlice = createSlice({
	name: "ToasterSlice",
	initialState: toasterAdapter.getInitialState(),
	reducers: {
		removeToast: toasterAdapter.removeOne,
		addToast: toasterAdapter.addOne,
	},
});

export const { actions: toastActions, reducer: toasterReducer } = ToasterSlice;

export { toasterAdapter };
