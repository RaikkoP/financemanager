import { useState, useEffect } from "react"
import axios from 'axios';

export default function Filters(props) {

    const [filter, setFilter] = useState('All');
    const tables = ["Name", "Type", "Amount", "Date"];
    const [data, setData] = useState([]);


    const changeFilter = (newSetting) => setFilter(newSetting);

    async function getData() {
        axios.get('http://localhost:5000/get/finance')
            .then(function (response) {
                console.log(response);
                setData([...data, ...response.data]);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        getData();
    },[])


    const filteredData = filter === "All" ? data : data.filter((data) => data.type === filter);

    return (
        <>
            <div className="w-[45vw] mx-auto mt-14 grid grid-cols-3">
                <button onClick={() => changeFilter("Income")} className="border border-neutral-600 p-4">Recent Income</button>
                <button onClick={() => changeFilter("All")} className="border border-neutral-600 p-4 px-12">All</button>
                <button onClick={() => changeFilter("Expense")}  className="border border-neutral-600 p-4">Recent Expenses</button>
            </div>
            <div className="w-[80vw] auto-rows-auto mx-auto mt-2 grid grid-cols-4 text-2xl">
                {tables.map((table) => (
                    <div className="border border-neutral-600 p-4" key={table}>
                        <h2 className="text-center">{table}</h2>
                    </div>
                ))}
            </div>
            {
            filteredData.map((data) => (
                <div key={data.id} className="w-[80vw] auto-rows-auto mx-auto grid grid-cols-4 text-2xl">
                    <div className="border border-neutral-600 p-4">
                        <h2 className="text-center">{data.name}</h2>
                    </div>
                    <div className="border border-neutral-600 p-4">
                        <h2 className="text-center">{data.type}</h2>
                    </div>
                    <div className="border border-neutral-600 p-4">
                        <h2 className="text-center">{data.amount}</h2>
                    </div>
                    <div className="border border-neutral-600 p-4">
                        <h2 className="text-center">{data.date}</h2>
                    </div>
                </div>
            ))}
        </>
    )
}