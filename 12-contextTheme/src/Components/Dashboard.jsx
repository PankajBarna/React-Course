import { useAppContext } from "../AppContext";
// import ThemeToggleSwitch from "./components/ThemeToggleSwitch";
import ThemeToggleSwitch from "./ThemeToggleSwitch";

export default function Dashboard() {
  const { language, toggleLanguage, user, login, logout } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      <h1 className="text-3xl font-bold mb-8">🌐 React Context + Tailwind Demo</h1>

      {/* Theme Switch */}
      <div className="mb-6">
        <ThemeToggleSwitch />
      </div>

      {/* Language Section */}
      <div className="mb-6 flex flex-col items-center">
        <p className="mb-2 text-lg">
          Language: <span className="font-semibold">{language === "en" ? "English" : "Hindi"}</span>
        </p>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 dark:bg-green-400 dark:text-gray-900 dark:hover:bg-green-500 transition"
        >
          Toggle Language
        </button>
      </div>

      {/* User Section */}
      <div className="flex flex-col items-center">
        <p className="mb-2 text-lg">
          User: <span className="font-semibold">{user.name}</span>
        </p>
        {user.loggedIn ? (
          <button
            onClick={logout}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 dark:bg-red-400 dark:text-gray-900 dark:hover:bg-red-500 transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => login("Panku")}
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-900 dark:hover:bg-indigo-500 transition"
          >
            Login as Panku
          </button>
        )}
      </div>
    </div>
  );
}
