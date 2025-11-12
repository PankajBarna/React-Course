import useAppTheme from "../Context/AppThemeContext"

export default function ThemeBtn(){

    const{themeMode, toggleThemeMode} = useAppTheme()

    const onChangeBtn = () => toggleThemeMode()

    return(
        <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox"
      value="" 
      className="sr-only peer"
      onChange={onChangeBtn}
      checked={themeMode === 'dark'}
       />
      <div className="flex px-1.5 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-500"></div>
      <span className="ml-3 text-sm font-medium text-zinc-800 dark:text-zinc-50">Dark Mode</span>
    </label>

    )
}