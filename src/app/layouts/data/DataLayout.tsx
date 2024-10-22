import type { FC, ReactNode } from "react";
import { useEffect } from "react";
import { getCategoryListThunks } from "@/entities/category";
import { useAppDispatch } from "@/app/providers";

interface DataLayoutProps {
	children: ReactNode;
}

const DataLayout: FC<DataLayoutProps> = ({ children }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCategoryListThunks());
	}, []);

	return <>{children}</>;
};

export { DataLayout };
