import { useState } from "react"

export default function Filters() {

    const [filter, setFilter] = useState('all');

    return (
        <>
            <div className="w-[45vw] mx-auto mt-14 grid grid-cols-3">
                <button className="border border-neutral-600 p-4">Recent Earnings</button>
                <button className="border border-neutral-600 p-4 px-12">All</button>
                <button className="border border-neutral-600 p-4">Recent Expenses</button>
            </div>
            <div className="w-[80vw] auto-rows-auto mx-auto mt-12 grid grid-cols-4">
               <div className="border border-neutral-600 p-4">
                    <h2 className="text-center">Name</h2>
               </div>
               <div className="border border-neutral-600 p-4">
                    <h2 className="text-center">Type</h2>
               </div>
               <div className="border border-neutral-600 p-4">
                    <h2 className="text-center">Amount</h2>
               </div>
               <div className="border border-neutral-600 p-4">
                    <h2 className="text-center">Date</h2>
               </div>
            </div>
        </>
    )
}