import { createContext, useContext } from "react";

export const AppThemeContext = createContext({
    themeMode:'light',
    toggleThemeMode: () => {}
})

export const AppThemeProvider = AppThemeContext.Provider

export default function useAppTheme(){
    return useContext(AppThemeContext)
}