
export default function Dashboard() {
    return(
        <>
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=60&w=600&h=400" alt="Expense Tracker Dashboard" className="rounded-lg shadow-md mx-auto"/>
        <h1 className="text-3xl font-bold text-center mt-6">Welcome to Your Expense Tracker Dashboard</h1>
        <p className="mt-4 text-slate-700 text-center">Monitor your expenses, track budgets, and gain insights into your financial habits all in one place.</p>

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold">Total Expenses</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">$1,250</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold">Monthly Budget</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">$2,000</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold">Savings</h3>
                    <p className="text-3xl font-bold text-purple-600 mt-2">$750</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold">Spending Alerts</h3>
                    <p className="text-3xl font-bold text-red-600 mt-2">3 Active</p>    
        </div></div></div>

        <div>
            <h2 className="text-2xl font-semibold mt-10 mb-4">Recent Transactions</h2>
            <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                    <tr>
                        <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700">Date</th>
                        <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700">Description</th>
                        <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700">Category</th>
                        <th className="py-3 px-6 bg-gray-200 text-right text-sm font-semibold text-gray-700">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="py-4 px-6 text-sm text-gray-700">2024-06-01</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Grocery Shopping</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Food</td>
                        <td className="py-4 px-6 text-sm text-gray-700 text-right">$150.00</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-4 px-6 text-sm text-gray-700">2024-06-03</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Electricity Bill</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Utilities</td>
                        <td className="py-4 px-6 text-sm text-gray-700 text-right">$75.00</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-4 px-6 text-sm text-gray-700">2024-06-05</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Dining Out</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Entertainment</td>
                        <td className="py-4 px-6 text-sm text-gray-700 text-right">$60.00</td>
                    </tr>
                    <tr>
                        <td className="py-4 px-6 text-sm text-gray-700">2024-06-07</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Monthly Rent</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Housing</td>
                        <td className="py-4 px-6 text-sm text-gray-700 text-right">$800.00</td>
                    </tr>
                </tbody>
            </table>
        </div>

        
        </>
    )
}