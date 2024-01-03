import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { UiLoader } from "@/shared/ui"; 
import { HomeAsync } from "@/pages";

const AppRouter = () => {
    return (
        <Suspense fallback={<UiLoader fullScreen={true}/>}>
            <Routes>
                <Route path={'/'} element={<HomeAsync/>}/>
            </Routes>
        </Suspense>
    )
};

export {
    AppRouter,
}