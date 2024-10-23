import {
	getMonthAgo,
	setBeginDayTime,
	setEndDayTime,
} from "@/shared/lib/dateMethods";
import { ExpensesFilters } from "../types/expenses";

const defaultExpensesFilter = (): ExpensesFilters => {
	return {
		expensesName: "",
		startDate: setBeginDayTime(getMonthAgo(new Date()).getTime()),
		endDate: setEndDayTime(new Date().getTime()),
		categoryIds: [],
	};
};

export { defaultExpensesFilter };
