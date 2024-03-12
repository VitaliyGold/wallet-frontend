import { GetTotalExpensesApi } from '../types/api';
import { fetcher } from '@/shared/lib/fetcher';

const getExpensesTotalApi = (name: string, startDate: number, endDate: number, categoryIds: string[]): Promise<GetTotalExpensesApi> => {
    const query = {
        name: name,
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
        categories: categoryIds,
    }

    return fetcher.get('expenses/total', query);
};

export {
    getExpensesTotalApi,
}