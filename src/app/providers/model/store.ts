import { configureStore } from "@reduxjs/toolkit"
import logger from 'redux-logger';
import { StateSchema } from "../types/types";
import { expensesReducer } from '@/entities/expenses';

const createReduxStore = (initialState?: StateSchema) => configureStore({
    reducer: {
        expenses: expensesReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger).concat(diskFileListApi.middleware),
    preloadedState: initialState,
});

export {
    createReduxStore
}