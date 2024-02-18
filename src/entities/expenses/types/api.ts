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
}

interface RemoveExpenseApiResponse {
    expenses_id: string;
	amount: number;
	date: string;
	name: string;
}

export type {
    SetExpenseApi,
    GetExpenseApi,
    UpdateExpenseApi,
    GetExpenseRequestParams,
    RemoveExpenseApiResponse,
}