import type { ChangeEvent } from "react";
import { forwardRef } from "react";

import { UiInput } from "@/shared/ui/uiInput";
import { formatDateToDatepicker } from "@/shared/lib/dateMethods";

interface DatePickerProps {
	label?: string;
	value: number;
	onChange: (date: number) => void;
	onBlur?: () => void;
	name?: string;
	disabled?: boolean;
}

const UiDatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
	(props, ref) => {
		const { value, onChange, ...rest } = props;
		const processedValue = (): string => {
			return formatDateToDatepicker(value);
		};

		const onDatePickerChange = (event: ChangeEvent<HTMLInputElement>) => {
			const date = event.currentTarget.value;
			if (date) {
				onChange(new Date(date).getTime());
			} else {
				onChange(new Date().getTime());
			}
		};

		return (
			<UiInput
				type="date"
				value={processedValue()}
				onChange={onDatePickerChange}
				{...rest}
				ref={ref}
			/>
		);
	},
);

export { UiDatePicker };
