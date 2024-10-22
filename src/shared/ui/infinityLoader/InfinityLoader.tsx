import type { FC } from "react";
import { InView } from "react-intersection-observer";

import { UiLoader } from "../loader";

interface InfinityLoaderProps {
	loaderSize?: number;
	getMoreCallback: () => void;
	condition: boolean;
}

const InfinityLoader: FC<InfinityLoaderProps> = ({
	loaderSize = 20,
	getMoreCallback,
	condition,
}) => {
	const onChangeViewLoader = (isVisible: boolean) => {
		if (isVisible) getMoreCallback();
	};

	if (condition) {
		return (
			<InView onChange={onChangeViewLoader}>
				<UiLoader size={loaderSize} />
			</InView>
		);
	}

	return null;
};

export { InfinityLoader };
