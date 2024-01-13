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

interface GetExpenseRequestParams {
    limit: number;
    offset: number;
    name: string;
}

export type {
    SetExpenseApi,
    GetExpenseApi,
    GetExpenseRequestParams,
}