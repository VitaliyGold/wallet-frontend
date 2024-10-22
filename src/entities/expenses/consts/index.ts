import { getMonthAgo } from "@/shared/lib/dateMethods";
import { ExpensesFilters } from "../types/expenses";

const defaultExpensesFilter = (): ExpensesFilters => {
	return {
		expensesName: "",
		startDate: getMonthAgo(new Date()).getTime(),
		endDate: new Date().getTime(),
		categoryIds: [],
	};
};

export { defaultExpensesFilter };
