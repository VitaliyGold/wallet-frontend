import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";
import type { FC } from "react";
import type { ExpensesFilters } from "@/entities/expenses";

import { UiDatePicker } from "@/shared/ui";
import { setBeginDayTime, setEndDayTime } from "@/shared/lib/dateMethods";

import styles from "./styles.module.less";

interface Props {
	control: Control<ExpensesFilters>;
}

const PeriodFilter: FC<Props> = ({ control }) => {
	return (
		<div className={styles.periodFilters}>
			<Controller
				name="startDate"
				control={control}
				render={({ field: { onChange, value, onBlur } }) => <UiDatePicker value={value} onChange={( date ) => onChange(setBeginDayTime(date))} onBlur={onBlur} />}
			/>
			<span>-</span>
			<Controller
				name="endDate"
				control={control}
				render={({ field: { onChange, value, onBlur } }) => <UiDatePicker value={value} onChange={( date ) => onChange(setEndDayTime(date))} onBlur={onBlur} />}
			/>
		</div>
	);
};

export { PeriodFilter };
