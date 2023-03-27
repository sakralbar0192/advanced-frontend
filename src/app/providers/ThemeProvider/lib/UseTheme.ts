import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
    theme: Theme
    toggleTheme: () => void
}
export const UseTheme = (): UseThemeResult => {
    let { theme, setTheme } = useContext(ThemeContext)
    if (theme === undefined) theme = Theme.LIGHT

    const toggleTheme = (): void => {
        if (setTheme === undefined) setTheme = () => {}
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}
