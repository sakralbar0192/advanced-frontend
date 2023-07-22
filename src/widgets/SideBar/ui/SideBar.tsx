import { type ReactElement, useState } from 'react'
import { ClassNames } from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { ButtonTheme, Button } from 'shared/ui/Button'
import { ButtonSize } from 'shared/ui/Button/ui/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePaths } from 'shared/configurations/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about_page.svg'

export const SideBar = (): ReactElement => {
    const [collapsed, setCollapsed] = useState(false)

    const { t } = useTranslation('navBar')

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
                size={ButtonSize.L}
            >
                { collapsed ? '>' : '<' }
            </Button>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePaths.main}
                    className={cls.link}
                >
                    <MainIcon />
                    <span>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePaths.about}
                    className={cls.link}
                >
                    <AboutIcon />
                    <span>
                        {t('О нас')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher
                    short={collapsed}
                />
            </div>
        </div>
    )
}
