import { ClassNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Navbar: FC = () => {
    const { t } = useTranslation('navBar')

    return (
        <div className={ClassNames(cls.Navbar)}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} className={cls.mainLink} to={'/'}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} className='' to={'/about'}>{t('О нас')}</AppLink>
            </div>
        </div>
    )
}
