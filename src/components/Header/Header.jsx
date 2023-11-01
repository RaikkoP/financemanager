export default function Header() {
    return (
        <div className="w-[85%] mx-auto grid grid-cols-3 m-3 text-center text-black">
            <div className="font-bold text-xl rounded-lg mx-2 p-8 bg-lime-400">
                <h2>Earnings: </h2>
                <h3>500$</h3>
            </div>
            <div className="font-bold text-xl rounded-lg mx-2 p-8 bg-stone-200">
                <h2>Current Balance: </h2>
                <h3>500$</h3>
            </div>
            <div className="font-bold text-xl rounded-lg mx-2 p-8 bg-red-500">
                <h2>Expenses: </h2>
                <h3>500$</h3>
            </div>
        </div>
    )
}