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
    "Help"
  ];
  return (
    // <div>Sidebar</div>
    <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-slate-100 p-6 shadow-none overflow-y-auto scrollbar-hide">
      <div className="flex flex-col justify-between h-full">
        <ul className="space-y-6">
          {sidebarItems.map((item) => (
            // <li
            //   key={item}
            //   className="cursor-pointer px-4 py-2.5 mb-1 rounded-md text-slate-700 hover:bg-blue-200 hover:text-blue-800 transition-colors duration-150"
            // >
            //   {item}
            // </li>

            <li key={item} className="mb-1">
              <NavLink
                to={item === "Dashboard" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-blue-200 hover:text-blue-800 transition-colors duration-150"
                  } cursor-pointer block px-4 py-2.5 rounded-md `
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="mt-20">
          <li className="mt-10 cursor-pointer px-4 py-2.5 mb-1 rounded-md text-slate-700 hover:bg-red-200 hover:text-red-800 transition-colors duration-150">
            Logout
          </li>
        </ul>
      </div>
    </aside>
  );
}
