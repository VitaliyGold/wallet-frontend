import { lazy } from "react";

const ExpensesPageAsync = lazy(() =>
	import("./Expenses").then((module) => ({ default: module.ExpensesPage })),
);

export { ExpensesPageAsync };
