import { DetailExpenses } from "@/widgets/detailExpenses";
import { ExpensesFilter } from "@/widgets/expensesFilters";

import { PageLayout } from "@/shared/ui";

const ExpensesListPage = () => {
    return (
        <PageLayout>
            <ExpensesFilter/>
            <DetailExpenses/>
        </PageLayout>
    )
};

export {
    ExpensesListPage,
}