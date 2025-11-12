import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const sidebarItems = [
    "Dashboard",
    "Analytics",
    "Settings",
    "Transactions",
    "Report",
    "Budget",
    "Categories",
    "Goals",
    "Help",
  ];
  return (
      <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 p-6 shadow-none overflow-y-auto scrollbar-hide">
      <div className="flex flex-col justify-between h-full">
        <ul className="space-y-6">
          {sidebarItems.map((item) => (
            <li key={item} className="mb-1">
              <NavLink
                to={item === "Dashboard" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-linear-to-br/srgb from-cyan-400 to-violet-300 text-zinc-800 dark:text-zinc-800"
                      : "text-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-100 hover:bg-zinc-100  transition-colors duration-150"
                  } cursor-pointer block px-4 py-2.5 rounded-md `
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="w-full bg-cyan-200 rounded-xl">
          <ul className="mt-20">
            <li className="mt-10 cursor-pointer py-2.5 mb-1 rounded-md text-slate-700 dark:hover:bg-red-700 dark:text-slate-100 hover:bg-red-200  transition-colors duration-150">
              Logout
            </li>
          </ul>
        </div>
      </div>
    </aside>
    
  );
}
