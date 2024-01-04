
import { expensesListSelector } from "@/entities/expenses";
import { useSelector } from "react-redux";


const ExpensesTable = () => {

    const expensesList = useSelector(expensesListSelector)

    return (
        <div>
            { expensesList.map((expense) => <p>{ expense.amount }</p>) }
        </div>
    )
};

export {
    ExpensesTable,
}