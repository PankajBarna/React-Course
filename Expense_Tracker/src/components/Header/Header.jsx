import ThemeBtn from "../ThemeBtn";
// import { useState } from "react";
import Btn from "../btn";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full `z-1000` bg-zinc-50 dark:bg-zinc-800">
      <header className="w-full h-16 flex justify-between items-center px-6 shadow-none">
        <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
          Expense Tracker
        </div>
        <div className="flex items-center gap-4">
          <input
            type="search"
            placeholder="Search..."
            className="px-4 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 dark:text-slate-200 mr-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ThemeBtn />
          <i className="fa-solid fa-bell text-slate-600 dark:text-slate-400 mr-6"></i>
          <div className="w-10 h-10 cursor-pointer bg-teal-300 dark:teal-400 rounded-full flex justify-center items-center text-slate-700 font-semibold hover:scale-110 transition-all ease-in">
            PB
          </div>
          <div className="text-zinc-900 dark:text-zinc-100 font-medium">Pankaj Barna</div>
          
        </div>
      </header>
    </nav>
  );
}


// function Box() {
//   const [hover, setHover] = useState(false);
//   return (
//     <div
//       style={{
//         width: "2.5rem",                // 10px
//         height: "2.5rem",
//         cursor: "pointer",
//         borderRadius:"100px",
//         display:"flex",
//         justifyContent:"center",
//         alignItems:"center",
//         text: hover ? "" : "skyblue",               // 10px
//         backgroundColor: hover ? "red" : "pink",
//       }}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       A
//     </div>
//   );
// }