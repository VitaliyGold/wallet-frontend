export const TOASTER_TYPES = {
	error: "error",
	default: "default",
};

export type ToasterType = keyof typeof TOASTER_TYPES;

export type ToastEntity = {
	title: string;
	message?: string;
	id: string;
	type: ToasterType;
};
