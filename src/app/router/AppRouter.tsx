import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { UiLoader } from "@/shared/ui"; 
import { DashboardAsync, CreateExpensesPageAsync, ExpensesListPageAsync, SettingsPageAsync } from "@/pages";

const AppRouter = () => {
    return (
        <Suspense fallback={<UiLoader/>}>
            <Routes>
                <Route path={'/'} element={<DashboardAsync/>}/>
                <Route path={'/expenses'} element={<ExpensesListPageAsync/>}/>
                <Route path={'/expenses/create'} element={<CreateExpensesPageAsync/>}/>
                <Route path={'/settings'} element={<SettingsPageAsync/>}/>
            </Routes>
        </Suspense>
    )
};

export {
    AppRouter,
}