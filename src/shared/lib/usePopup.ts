import { useState } from "react";

import {
	useFloating,
	autoUpdate,
	useClick,
	useInteractions,
	useDismiss,
	offset,
} from "@floating-ui/react";

const usePopup = () => {
	const [isPopupOpen, setPopupOpen] = useState(false);

	const openTrigger = (isOpen: boolean) => {
		setPopupOpen(isOpen);
	};

	const { refs, floatingStyles, context } = useFloating({
		placement: "bottom-start",
		strategy: "absolute",
		open: isPopupOpen,
		onOpenChange: openTrigger,
		whileElementsMounted: autoUpdate,
		middleware: [offset(5)],
	});

	const dismiss = useDismiss(context);

	const click = useClick(context);

	const { getFloatingProps } = useInteractions([click, dismiss]);

	return {
		openTrigger,
		isPopupOpen,
		refs,
		getFloatingProps,
		floatingStyles,
	};
};

export { usePopup };
