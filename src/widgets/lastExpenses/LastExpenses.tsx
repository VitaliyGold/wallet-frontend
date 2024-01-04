
import { expensesListSelector } from "@/entities/expenses";
import { useSelector } from "react-redux";
import { ExpensesTable } from "@/features/expensesTable";


const LastExpenses = () => {

    const expensesList = useSelector(expensesListSelector)

    return (
        <div>
            <ExpensesTable expensesList={expensesList} />
        </div>
    )
};

export {
    LastExpenses,
}