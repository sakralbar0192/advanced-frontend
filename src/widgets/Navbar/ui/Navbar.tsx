import { ClassNames } from 'shared/lib/ClassNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import type { ReactElement } from 'react'

export const Navbar = (): ReactElement => {
    return (
        <div className={ClassNames(cls.Navbar)}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} className={cls.mainLink} to={'/'}>Main</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} className='' to={'/about'}>About</AppLink>
            </div>
        </div>
    )
}
