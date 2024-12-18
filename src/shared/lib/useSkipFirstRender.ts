import { useEffect, useRef } from "react";
// eslint-disable-next-line
function useSkipFirstRender(callback: CallableFunction, dependencies: any[]) {
	const firstRenderRef = useRef(true);

	useEffect(() => {
		if (firstRenderRef.current) {
			firstRenderRef.current = false;
			return;
		}
		callback();
	}, dependencies);
}

export { useSkipFirstRender };
