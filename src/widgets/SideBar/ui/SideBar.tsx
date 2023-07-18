import { type ReactElement, useState } from 'react'
import { ClassNames } from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { ButtonTheme, Button } from 'shared/ui/Button'

export const SideBar = (): ReactElement => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = (): void => {
        setCollapsed(!collapsed)
    }

    return (
        <div
            data-testid='sidebar'
            className={ClassNames(cls.SideBar, { [cls.collapsed]: collapsed })}
        >
            <Button
                data-testid='toggle'
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ ButtonTheme.BACKGROUND_INVERTED}
                square
            >
                { collapsed ? '>' : '<' }
            </Button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
}
