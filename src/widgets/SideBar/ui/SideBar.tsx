import { type ReactElement, useState } from 'react'
import { ClassNames } from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { ErrorThrowingButton } from 'widgets/ErrorThrowingButton/ui/ErrorThrowingButton'

export const SideBar = (): ReactElement => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation('sideBar')

    const onToggle = (): void => {
        setCollapsed(!collapsed)
    }

    return (
        <div
            data-testid='sidebar'
            className={ClassNames(cls.SideBar, { [cls.collapsed]: collapsed })}
        >
            <button
                data-testid='toggle'
                onClick={onToggle}>
                {t('Свернуть')}
            </button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
            <ErrorThrowingButton />
        </div>
    )
}
