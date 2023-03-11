import { Theme, UseTheme } from "app/providers/ThemeProvider";
import { ClassNames } from "shared/lib/ClassNames";
import cls from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}



export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {
    const {theme, toggleTheme} = UseTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={ClassNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ?<DarkIcon /> :<LightIcon />}
        </Button>
    )
}