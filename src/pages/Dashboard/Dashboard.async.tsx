import { lazy } from "react";

const DashboardAsync = lazy(() => import('./Dashboard').then(module => ({ default: module.Dashboard })));

export {
    DashboardAsync,
}