import { useEffect, useState } from "react";

export default function Filters(props) {
    const [filter, setFilter] = useState('All');
    const tables = ["Name", "Type", "Amount", "Date"];

    const hasExpenses = props.expenses.length > 0;

    const filteredData = hasExpenses
        ? filter === "All"
            ? props.expenses
            : props.expenses.filter((expense) => expense.type === filter)
        : [];

    useEffect(() => {
    }, [props.expenses]);

    return (
        <>
            <div className="w-[45vw] mx-auto mt-14 grid grid-cols-3">
                <button onClick={() => setFilter("Income")} className="border border-neutral-600 p-4">
                    Recent Income
                </button>
                <button onClick={() => setFilter("All")} className="border border-neutral-600 p-4 px-12">
                    All
                </button>
                <button onClick={() => setFilter("Expense")} className="border border-neutral-600 p-4">
                    Recent Expenses
                </button>
            </div>
            <div className="w-[80vw] auto-rows-auto mx-auto mt-2 grid grid-cols-4 text-2xl">
                {tables.map((table) => (
                    <div className="border border-neutral-600 p-4" key={table}>
                        <h2 className="text-center">{table}</h2>
                    </div>
                ))}
            </div>
            {hasExpenses ? (
                filteredData.length === 0 ? (
                    <p className="text-center">No expenses to display.</p>
                ) : (
                    filteredData.map((expense) => (
                        <div key={expense.id} className="w-[80vw] auto-rows-auto mx-auto grid grid-cols-4 text-2xl">
                            <div className="border border-neutral-600 p-4">
                                <h2 className="text-center">{expense.name}</h2>
                            </div>
                            <div className="border border-neutral-600 p-4">
                                <h2 className="text-center">{expense.type}</h2>
                            </div>
                            <div className="border border-neutral-600 p-4">
                                <h2 className="text-center">{expense.amount}</h2>
                            </div>
                            <div className="border border-neutral-600 p-4">
                                <h2 className="text-center">{expense.date}</h2>
                            </div>
                        </div>
                    ))
                )
            ) : (
                <p className="text-center">No expenses to display.</p>
            )}
        </>
    );
}