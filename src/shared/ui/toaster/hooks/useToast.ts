import { useAppDispatch } from "@/app";

import { toastActions } from "../model/toasterSlice";
import type { ToastEntity } from "../types";

export const useToast = () => {
	const dispatch = useAppDispatch();

	const removeToast = (id: string) => {
		dispatch(toastActions.removeToast(id));
	};

	const addToast = (toast: Omit<ToastEntity, "id">) => {
		const id = String(Math.floor(new Date().getTime() * Math.random()));

		dispatch(toastActions.addToast({ ...toast, id }));
	};

	return {
		addToast,
		removeToast,
	};
};
