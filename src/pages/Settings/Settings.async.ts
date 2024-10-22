import { lazy } from "react";

const SettingsPageAsync = lazy(() =>
	import("./Settings").then((module) => ({ default: module.SettingsPage })),
);

export { SettingsPageAsync };
