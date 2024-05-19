import { AmountDirection } from "./expenses";

interface GetExpenseApi {
    expenses_id: string,
    amount: number,
    date: string,
    name: string,
    category: [
        {
            category_id: string
        }
    ],
    tags: [
        {
            tag_id: string
        }
    ]
}

interface SetExpenseApi {
    amount: number,
    date: string,
    name: string,
    categories: string[],
    tags: string[],
}

type UpdateExpenseApi = SetExpenseApi & Pick<GetExpenseApi, 'expenses_id'>;

interface GetExpenseRequestParams {
    limit: number;
    offset: number;
    name: string;
    startDate: number;
    endDate: number;
    categoryIds: string[];
    direction: AmountDirection | 'all';
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

export type {
    SetExpenseApi,
    GetExpenseApi,
    UpdateExpenseApi,
    GetTotalExpensesApi,
    GetTotalExpensesRequestParams,
    GetExpenseRequestParams,
    RemoveExpenseApiResponse,
}