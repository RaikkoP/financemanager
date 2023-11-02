import { useState } from "react";
import Filters from "../Filters/Filters";
import Form from "../Form/Form";
import Header from "../Header/Header";

export default function Dashboard()  {

    const [data, setData] = useState([
        {
            id: 1,
            name: "New Jacket",
            type: "Expense",
            amount: "200$",
            date: "02.02.2023"
        },
        {
            id: 2,
            name: "New Socks",
            type: "Expense",
            amount: "20$",
            date: "02.02.2023"
        },
        {
            id: 3,
            name: "Mom Paid Me",
            type: "Income",
            amount: "200$",
            date: "02.02.2023"
        },
        {
            id: 4,
            name: "Salary",
            type: "Income",
            amount: "900$",
            date: "02.02.2023"
        }
    ]);
    
    return (
        <>
            <Header></Header>
            <Form expenses={data} setExpenses={setData}></Form>
            <Filters expenses={data}></Filters>
        </>     
    )
}