import { useEffect } from "react";
import { ThemeProvider } from "./Context/Theme";
import { useState } from "react";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const toggleMode = () => setThemeMode((prev) => prev === 'dark' ? 'light' : 'dark')

  // const toggleMode = ((prev) => setThemeMode(prev === 'dark' ? 'light' : 'dark'))
// console.log(themeMode)
  // const darkMode = () => setThemeMode('dark')

  // const lightMode = () => setThemeMode('light')

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, toggleMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* themeBtn */}
          <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* Card */}
          <Card />
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
