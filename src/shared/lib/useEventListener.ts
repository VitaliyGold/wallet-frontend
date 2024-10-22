import { useEffect, useRef } from "react";

type CurrentElement = HTMLElement | Window | Document;

const useEventListener = (
	eventType: string,
	callback: CallableFunction,
	element: CurrentElement = window,
	useCapture = false,
) => {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		if (element == null) return;
		const handler = (e: Event) => callbackRef.current(e);
		element.addEventListener(eventType, handler, useCapture);

		return () =>
			element.removeEventListener(eventType, handler, useCapture);
	}, [eventType, element]);
};
export { useEventListener };
