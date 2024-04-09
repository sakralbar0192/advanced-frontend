import { useMemo, useState, type ReactElement } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) === null
    ? Theme.LIGHT
    : localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

interface ThemeProviderProps {
    children: ReactElement
    initialTheme?: Theme
}

const ThemeProvider = (props: ThemeProviderProps): ReactElement => {
    const {
        children,
        initialTheme
    } = props
    const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)
    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
