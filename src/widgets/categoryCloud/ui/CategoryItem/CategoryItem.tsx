import type { FC, RefObject } from "react";
import { useRef } from "react";

import { CategoryLabel } from "@/entities/category";
import { EditCategoryButton } from "@/features/categoryForm";
import { RemoveCategoryButton } from "@/features/removeCategory";

interface Props {
	color: string;
	categoryId: string;
	name: string;
	isLoading: boolean;
}

export const CategoryItem: FC<Props> = ({
	color,
	categoryId,
	name,
	isLoading,
}) => {
	const ref = useRef() as RefObject<HTMLDivElement>;
	return (
		<CategoryLabel
			key={categoryId}
			ref={ref}
			size="large"
			color={color}
			isLoading={isLoading}
			id={categoryId}
			controlPanel={
				<>
					<EditCategoryButton
						categoryId={categoryId}
						labelRef={ref}
					/>
					<RemoveCategoryButton categoryId={categoryId} />
				</>
			}
		>
			{name}
		</CategoryLabel>
	);
};
