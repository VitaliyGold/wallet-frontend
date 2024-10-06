type ExpenseApi = {
    expenses_id: string,
    amount: number,
    date: string,
    name: string,
}

type ExpenseApiWithCategoryAndTags = ExpenseApi & {
    category: {
        category_id: string
    } | null,
    tag: {
        tag_id: string
    } | null,
}

interface SetExpenseApi {
    amount: number,
    date: string,
    name: string,
    categoryId: string | null,
    tagId: string | null,
}

type UpdateExpenseApi = SetExpenseApi & Pick<ExpenseApiWithCategoryAndTags, 'expenses_id'>;

interface GetExpenseRequestParams {
    limit: number;
    offset: number;
    name: string;
    startDate: number;
    endDate: number;
    categoryIds: string[];
}

interface ExpenseGroupByCategoryApi {
    category_id: string;
    category_total_amount: number;
    expenses: ExpenseApi[];
}

type GetTotalExpensesRequestParams = Omit<GetExpenseRequestParams, 'offset' | 'limit'>;

interface RemoveExpenseApiResponse {
    expenses_id: string;
	amount: number;
	date: string;
	name: string;
}

interface GetTotalExpensesApi {
    total: number;
};

type GetExpensesGroupByCategoryParams = Pick<GetExpenseRequestParams, 'startDate' | 'endDate'>

type GetExpenseGroupByCategoryApi = Array<ExpenseGroupByCategoryApi>;

export type {
    SetExpenseApi,
    ExpenseApi,
    UpdateExpenseApi,
    GetTotalExpensesApi,
    GetTotalExpensesRequestParams,
    GetExpenseRequestParams,
    RemoveExpenseApiResponse,
    ExpenseApiWithCategoryAndTags,
    GetExpenseGroupByCategoryApi,
    GetExpensesGroupByCategoryParams
}