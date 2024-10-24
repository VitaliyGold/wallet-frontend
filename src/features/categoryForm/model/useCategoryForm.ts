import { useState } from "react";

import {
	useFloating,
	useClick,
	useInteractions,
	useDismiss,
	offset,
} from "@floating-ui/react";
// TODO вынести всю работу с тултипами в отдельный shared хук
const useCategoryForm = (
	labelRef: HTMLDivElement | null | undefined = null,
) => {
	const [isFormOpen, setFormOpen] = useState(false);
	const openTrigger = (isOpen: boolean) => {
		setFormOpen(isOpen);
	};

	const { refs, floatingStyles, context } = useFloating({
		placement: "bottom-start",
		strategy: "absolute",
		open: isFormOpen,
		onOpenChange: openTrigger,
		middleware: [offset(5)],
		elements: {
			reference: labelRef,
		},
	});

	const dismiss = useDismiss(context);

	const click = useClick(context);

	const { getFloatingProps } = useInteractions([click, dismiss]);

	return {
		openTrigger,
		isFormOpen,
		refs,
		getFloatingProps,
		floatingStyles,
	};
};

export { useCategoryForm };
