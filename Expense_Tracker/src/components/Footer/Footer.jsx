export default function Footer() {
  return (
    <footer>
      <div className="bottom-0 relative w-[calc()100vw-6rem] ml-64 h-auto flex justify-around items-center flex-wrap py-4">
        <div>
            <i className="fa-brands text-xl fa-twitter mr-4 cursor-pointer text-slate-600 dark:text-slate-200 hover:text-blue-400"></i>
            <i className="fa-brands text-xl fa-linkedin mr-4 cursor-pointer text-slate-600 dark:text-slate-200 hover:text-blue-700"></i>
            <i className="fa-brands text-xl fa-instagram mr-4 cursor-pointer text-slate-600 dark:text-slate-200 hover:text-pink-500"></i>
          </div>
        
        <div className="flex flex-col py-4 justify-center items-center gap-2">
          <div className="text-2xl font-bold text-slate-700 dark:text-slate-100">Expense Tracker</div>
          <p className="text-sm text-slate-600 dark:text-slate-200">
          &copy; 2024 Expense Tracker. All rights reserved.
        </p>
          
        </div>
      </div>
    </footer>
  );
}
