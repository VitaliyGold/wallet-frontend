import type { GetExpenseGroupByCategoryApi } from '../types/api';

import { fetcher } from '@/shared/lib/fetcher';

const getExpensesGroupByCategory = (startDate: number, endDate: number): Promise<GetExpenseGroupByCategoryApi> => {
    const query = {
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
    }

    return fetcher.get('expenses/group', query);
}

export {
    getExpensesGroupByCategory
}
