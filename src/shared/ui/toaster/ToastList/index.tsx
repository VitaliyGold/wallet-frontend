import { useSelector } from "react-redux";

import { toastListSelector } from "../model/selectors";
import { Toast } from "../Toast";

import styles from "./styles.module.less";

export const ToastList = () => {
	const toastList = useSelector(toastListSelector.selectAll);

	return (
		<div className={styles.toastList}>
			{toastList.map((toast) => (
				<Toast
					key={toast.id}
					title={toast.title}
					id={toast.id}
					message={toast.message}
					type={toast.type}
				/>
			))}
		</div>
	);
};
