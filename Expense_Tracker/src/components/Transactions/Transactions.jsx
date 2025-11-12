export default function Transactions() {
    return(
    
        <div className="w-[80%] rounded-xl">
            <div className="flex justify-between items-center w-full bg-blue-200 p-6 rounded-xl mb-8 text-2xl overflow-hidden">

                <div>
                    <p className="">Transactions</p>
                    {/* <!-- Breadcrumbs --> */}
                    <nav className="mt-2 text-base font-medium text-slate-500">
                        <ol className="flex items-center gap-3">
                            <li><a href="#" className="hover:text-slate-700">Home</a></li>
                            <li className="text-slate-500">•</li>
                            <li className="text-slate-700">Transactions</li>
                        </ol>
                    </nav>

                </div>

                {/* <!-- SVG Illustration --> */}

                
                {/* <!-- SVG Illustration End --> */}

            </div>


            {/* <!-- Transactions --> */}
            <div className="">
                <div className="w-full h-auto bg-zinc-200 dark:bg-zinc-700 p-6 rounded-2xl">
                    <div className="flex items-center justify-between text-center align-middle pl-2 pr-6 pt-4 mb-6">
                        <div className="flex justify-between items-center w-3xs bg-zinc-50 rounded-xl p-2">
                            <input type="search" placeholder="Search..." className="outline-none bg-transparent w-full text-slate-600"/>
                            <i className="fa-solid fa-magnifying-glass text-slate-400 ml-2"></i>
                        </div>
                        <div className="flex justify-center items-center w-10 h-10 hover:bg-white rounded-full">
                            <i className="fa-solid fa-filter text-slate-600 text-lg"></i>
                        </div>
                        
                    </div>

                    {/* <!-- Header --> */}
                    <div className="grid grid-cols-5 bg-zinc-100 dark:bg-zinc-600 text-slate-600 font-semibold rounded-xl p-2 mb-6">
                        <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Description</div>
                        <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Date</div>
                        <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Type</div>
                        <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Amount</div>
                        <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Notes</div>
                    </div>

                    {/* <!-- Row --> */}
                    <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl mb-6 p-2">
                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Shopping • Clothes</div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Sep 17, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-purple-200 text-purple-800 justify-center items-center rounded-full">
                                Shopping
                            </div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">$ 2,500.0</div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Bought new shoes</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700" />

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Income • Salary</div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Sep 01, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-lime-200 text-lime-800 justify-center items-center rounded-full">
                                Salary
                            </div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">$ 85,000.0</div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Monthly Amazon salary credited</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>


                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Food • Restaurant</div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Sep 15, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-green-200 text-green-800 justify-center items-center rounded-full">
                                Food
                            </div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">$ 1,200.0</div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Dinner with friends</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Transport • Taxi</div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Sep 14, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-blue-200 text-blue-800 justify-center items-center rounded-full">
                                Transport
                            </div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">$ 350.0</div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Ride to airport</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Health • Pharmacy</div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Sep 12, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-red-200 text-red-800 justify-center items-center rounded-full">
                                Health
                            </div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">$ 640.0</div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Bought vitamins</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Entertainment • Movies</div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Sep 11, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-pink-200 text-pink-800 justify-center items-center rounded-full">
                                Entertainment
                            </div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">$ 480.0</div>
                            <div className="px-4 py-2 text-zinc-900 dark:text-zinc-100">Movie tickets for 2</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2">Bills • Electricity</div>
                            <div className="px-4 py-2">Sep 10, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-yellow-200 text-yellow-800 justify-center items-center rounded-full">
                                Bills
                            </div>
                            <div className="px-4 py-2">$ 2,100.0</div>
                            <div className="px-4 py-2">Monthly electricity bill</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2">Groceries • Supermarket</div>
                            <div className="px-4 py-2">Sep 09, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-orange-200 text-orange-800 justify-center items-center rounded-full">
                                Groceries
                            </div>
                            <div className="px-4 py-2">$ 3,250.0</div>
                            <div className="px-4 py-2">Weekly grocery shopping</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2">Subscriptions • Netflix</div>
                            <div className="px-4 py-2">Sep 07, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-indigo-200 text-indigo-800 justify-center items-center rounded-full">
                                Subscriptions
                            </div>
                            <div className="px-4 py-2">$ 499.0</div>
                            <div className="px-4 py-2">Monthly Netflix plan</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2">Shopping • Electronics</div>
                            <div className="px-4 py-2">Sep 05, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-purple-200 text-purple-800 justify-center items-center rounded-full">
                                Shopping
                            </div>
                            <div className="px-4 py-2">$ 15,000.0</div>
                            <div className="px-4 py-2">Bought new headphones</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2">Travel • Flight</div>
                            <div className="px-4 py-2">Sep 02, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-cyan-200 text-cyan-800 justify-center items-center rounded-full">
                                Travel
                            </div>
                            <div className="px-4 py-2">$ 25,500.0</div>
                            <div className="px-4 py-2">Mumbai to Delhi flight</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2">Education • Courses</div>
                            <div className="px-4 py-2">Sep 01, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-teal-200 text-teal-800 justify-center items-center rounded-full">
                                Education
                            </div>
                            <div className="px-4 py-2">$ 8,000.0</div>
                            <div className="px-4 py-2">Online React course</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2">Food • Cafe</div>
                            <div className="px-4 py-2">Aug 31, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-green-200 text-green-800 justify-center items-center rounded-full">
                                Food
                            </div>
                            <div className="px-4 py-2">$ 320.0</div>
                            <div className="px-4 py-2">Morning coffee & snacks</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2">Transport • Metro</div>
                            <div className="px-4 py-2">Aug 29, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-blue-200 text-blue-800 justify-center items-center rounded-full">
                                Transport
                            </div>
                            <div className="px-4 py-2">$ 150.0</div>
                            <div className="px-4 py-2">Daily commute pass</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2">Health • Gym</div>
                            <div className="px-4 py-2">Aug 28, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-red-200 text-red-800 justify-center items-center rounded-full">
                                Health
                            </div>
                            <div className="px-4 py-2">$ 2,200.0</div>
                            <div className="px-4 py-2">Monthly gym membership</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2">Bills • Internet</div>
                            <div className="px-4 py-2">Aug 25, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-yellow-200 text-yellow-800 justify-center items-center rounded-full">
                                Bills
                            </div>
                            <div className="px-4 py-2">$ 999.0</div>
                            <div className="px-4 py-2">Monthly broadband bill</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2">Groceries • Fruits</div>
                            <div className="px-4 py-2">Aug 22, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-orange-200 text-orange-800 justify-center items-center rounded-full">
                                Groceries
                            </div>
                            <div className="px-4 py-2">$ 780.0</div>
                            <div className="px-4 py-2">Bought seasonal fruits</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2">Subscriptions • Spotify</div>
                            <div className="px-4 py-2">Aug 20, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-indigo-200 text-indigo-800 justify-center items-center rounded-full">
                                Subscriptions
                            </div>
                            <div className="px-4 py-2">$ 199.0</div>
                            <div className="px-4 py-2">Monthly premium plan</div>
                        </div>
                        <hr className="text-zinc-200 dark:text-zinc-700"/>

                        <div className="grid grid-cols-5 py-2">
                            <div className="px-4 py-2">Shopping • Accessories</div>
                            <div className="px-4 py-2">Aug 18, 2025</div>
                            <div
                                className="flex px-3 py-1.5 h-fit w-fit text-sm bg-purple-200 text-purple-800 justify-center items-center rounded-full">
                                Shopping
                            </div>
                            <div className="px-4 py-2">$ 1,450.0</div>
                            <div className="px-4 py-2">New leather wallet</div>
                        </div>



                    </div>

                </div>
            </div>
            {/* <!-- Transactions End --> */}
        </div>
        
    )
}