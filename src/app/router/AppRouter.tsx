import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { UiLoader } from "@/shared/ui"; 
import { HomeAsync, CreateExpensesPageAsync } from "@/pages";

const AppRouter = () => {
    return (
        <Suspense fallback={<UiLoader/>}>
            <Routes>
                <Route path={'/'} element={<HomeAsync/>}/>
                <Route path={'/expenses/create'} element={<CreateExpensesPageAsync/>}/>
            </Routes>
        </Suspense>
    )
};

export {
    AppRouter,
}