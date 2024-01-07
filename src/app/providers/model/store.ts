import { configureStore } from "@reduxjs/toolkit"
import logger from 'redux-logger';
import { useDispatch } from 'react-redux'
import { expensesReducer } from '@/entities/expenses';

const createReduxStore = () => configureStore({
    reducer: {
        expenses: expensesReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger).concat(diskFileListApi.middleware),
});

const store = createReduxStore();

type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;

type RootStore = ReturnType<typeof store.getState>;

export {
    store,
    useAppDispatch,
}

export type {
    RootStore,
}