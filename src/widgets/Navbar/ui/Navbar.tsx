import { ClassNames } from "shared/lib/ClassNames";
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const {t} = useTranslation()
    return (
        <div className={ClassNames(cls.Navbar)}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} className={cls.mainLink} to={'/'}>{t("Main")}</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>About</AppLink>
            </div>            
        </div>
    )
}