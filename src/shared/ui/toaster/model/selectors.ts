import type { RootStore } from "@/app";

import { toasterAdapter } from "./toasterSlice";

export const toastListSelector = toasterAdapter.getSelectors(
	(state: RootStore) => state.toasters,
);
