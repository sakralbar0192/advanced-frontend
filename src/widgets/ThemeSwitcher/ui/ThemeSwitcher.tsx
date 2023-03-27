import { Theme, UseTheme } from 'app/providers/ThemeProvider'
import { ClassNames } from 'shared/lib/ClassNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { type ReactElement } from 'react'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps): ReactElement => {
    const { theme, toggleTheme } = UseTheme()
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={ClassNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
