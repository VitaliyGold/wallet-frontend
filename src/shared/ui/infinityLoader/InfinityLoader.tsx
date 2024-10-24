import type { FC } from "react";
import { InView } from "react-intersection-observer";

import { UiLoader } from "../loader";

interface InfinityLoaderProps {
	loaderSize?: number;
	getMoreCallback: () => void;
	hasMoreData: boolean;
	isLoading: boolean;
}

const InfinityLoader: FC<InfinityLoaderProps> = ({
	loaderSize = 20,
	getMoreCallback,
	hasMoreData,
	isLoading,
}) => {
	console.log(2);
	const onChangeViewLoader = (isVisible: boolean) => {
		if (isVisible && !isLoading) getMoreCallback();
	};

	if (hasMoreData) {
		return (
			<InView onChange={onChangeViewLoader}>
				<UiLoader size={loaderSize} />
			</InView>
		);
	}

	return null;
};

export { InfinityLoader };
