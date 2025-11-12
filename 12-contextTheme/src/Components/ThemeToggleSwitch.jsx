// components/ThemeToggleSwitch.jsx
import { useAppContext } from "../AppContext";

export default function ThemeToggleSwitch() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <div
        className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 
                   peer-focus:ring-blue-300 rounded-full peer 
                   dark:bg-gray-700 peer-checked:bg-yellow-400 
                   transition-all duration-300"
      ></div>
      <span
        className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full 
                   transition-transform duration-300 peer-checked:translate-x-6"
      ></span>
      <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-200">
        {theme === "dark" ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </span>
    </label>
  );
}
