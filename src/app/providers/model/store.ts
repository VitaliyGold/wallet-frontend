import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
	expensesReducer,
	createExpensesReducer,
	expensesBarReducer,
} from "@/entities/expenses";
import { categoryReducer } from "@/entities/category";

const createReduxStore = () =>
	configureStore({
		reducer: {
			expenses: expensesReducer,
			createExpenses: createExpensesReducer,
			category: categoryReducer,
			expensesBar: expensesBarReducer,
		},
		devTools: import.meta.env.NODE_ENV !== "production",
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ serializableCheck: false }),
	});

const store = createReduxStore();

type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;

type RootStore = ReturnType<typeof store.getState>;

export { store, useAppDispatch };

export type { RootStore };
