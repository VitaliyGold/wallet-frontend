import { lazy } from "react";

const HomeAsync = lazy(() => import('./Home').then(module => ({ default: module.Home })));

export {
    HomeAsync,
}