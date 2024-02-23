import { DetailExpenses } from "@/widgets/detailExpenses";
import { ExpensesFilter } from "@/widgets/expensesFilters";
import { ExpensesTotal } from "@/features/expensesTotal";

import { PageLayout } from "@/shared/ui";

const ExpensesListPage = () => {
    return (
        <PageLayout>
            <ExpensesFilter/>
            <DetailExpenses/>
            <ExpensesTotal/>
        </PageLayout>
    )
};

export {
    ExpensesListPage,
}