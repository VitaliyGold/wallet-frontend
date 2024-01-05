import type { ReactNode, FC } from "react";
import { Provider } from 'react-redux';

import { store } from "./model/store";
import { StateSchema } from "./types/types";

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema;
}

const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {

    return (
        <Provider store={store}>
            { children }
        </Provider>

    )
};

export {
    StoreProvider
}