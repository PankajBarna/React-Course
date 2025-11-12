import { createContext, useState, useMemo, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [user, setUser] = useState({ name: "Guest", loggedIn: false });

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));
  const toggleLanguage = () => setLanguage(prev => (prev === "en" ? "hi" : "en"));
  const login = (name) => setUser({ name, loggedIn: true });
  const logout = () => setUser({ name: "Guest", loggedIn: false });

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
      language,
      toggleLanguage,
      user,
      login,
      logout,
    }),
    [theme, language, user]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <div className={theme === "dark" ? "dark" : ""}>{children}</div>
    </AppContext.Provider>
  );
};

export default function useAppContext() {
  return useContext(AppContext);
};
