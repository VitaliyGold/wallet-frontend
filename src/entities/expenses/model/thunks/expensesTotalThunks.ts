import { createAsyncThunk } from "@reduxjs/toolkit";
import { getExpensesTotalApi } from "../../api/total";

import { GetTotalExpensesRequestParams } from "../../types/api";

const getExpensesTotalThunk = createAsyncThunk(
	"expenses/total",
	async ({
		name,
		startDate,
		endDate,
		category_ids,
	}: GetTotalExpensesRequestParams): Promise<number> => {
		const { total } = await getExpensesTotalApi(
			name,
			startDate,
			endDate,
			category_ids,
		);

		return total;
	},
);

export { getExpensesTotalThunk };
