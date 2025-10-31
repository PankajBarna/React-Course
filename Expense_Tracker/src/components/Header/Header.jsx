

export default function Header(){
    return(
        <nav className="fixed top-0 left-0 w-full z-50">        
            <header className="w-full h-16 bg-slate-100 flex justify-between items-center px-6 shadow-none">
                <div className="text-2xl font-bold">Expense Tracker</div>
                <div className="flex items-center">
                    <input type="search" placeholder="Search..." className="px-4 py-2 border border-slate-300 rounded-lg mr-6 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    <i className="fa-solid fa-bell text-slate-600 mr-6"></i>
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex justify-center items-center text-slate-700 font-semibold">A</div>
                </div>
            </header>
        </nav>
    )
}