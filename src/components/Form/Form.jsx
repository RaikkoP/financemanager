import { useState } from "react"
import Expense from "../../class/Expense";
import axios from 'axios';

export default function Form(props) {

    const [open, setOpen] = useState(false);
    const [transaction, setTransaction] = useState('');
    const [type, setType] = useState('Income');
    const [amount, setAmount] = useState('');

    function handleTransactionChange(event) {
        event.preventDefault();
        setTransaction(event.target.value);
    }
    function handleTypeChange(event) {
        event.preventDefault();
        setType(event.target.value);
    }
    function handleAmountChange(event) {
        event.preventDefault();
        setAmount(event.target.value);
    }
    async function onFormSubmit(event) {
        event.preventDefault();
        const newExpense = new Expense(transaction, type, amount);
        setTransaction('');
        setType('Income');
        setAmount('');
        console.log(newExpense);
        try {
            const response = await axios.post("http://localhost:5000/create/finance", newExpense);
            console.log(response);
            props.getData();
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="flex justify-center">
                {
                    !open &&
                    <button onClick={() => setOpen(true)} className="text-3xl p-4 mt-12 border rounded-lg">Add Log</button>
                }
                {
                    open &&
                    <button onClick={() => setOpen(false)} className="text-3xl p-4 mt-12 border rounded-lg">Close</button>
                }
            </div>
            {
                open &&
                <form className="mt-8 w-[25%] mx-auto flex flex-col justify-center">
                    <label htmlFor="transaction">Transaction Name:</label>
                    <input className="mb-4" onChange={(event) => handleTransactionChange(event)} value={transaction} placeholder="Paycheck" type="text" id="transaction" name="transaction" />
                    <select className="mb-2" onChange={(event) => handleTypeChange(event)} value={type} id="type" name="type">
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                    <label htmlFor="amount">Amount:</label>
                    <input className="mb-2" onChange={(event) => handleAmountChange(event)} value={amount} placeholder="900$" type="text" id="amount" name="amount" />
                    <button onClick={(event) => onFormSubmit(event)} className="border border-neutral-600 p-4">Submit</button>
                </form>
            }
        </>
    )
}