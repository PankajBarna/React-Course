import Sidebar from "./components/Sidebar/sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { AppThemeProvider } from "./Context/AppThemeContext";
import { useState } from "react";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";

function Layout() {
  const [themeMode, setThemeMode] = useState('light')

  const toggleThemeMode = () => setThemeMode((prev) => prev === 'light' ? 'dark' : 'light')

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  
  return (
    <AppThemeProvider value={{themeMode, toggleThemeMode}}>
      
      <Header />
      <Sidebar />
      <main className="ml-64 mt-16 p-16 bg-zinc-300 dark:bg-zinc-950 rounded-xl m-6 min-h-[calc(100vh-4rem-3rem-6rem)] overflow-hidden flex justify-center">
        <Outlet />
      </main>
      <Footer />
    </AppThemeProvider>
  );
}

export default Layout;
