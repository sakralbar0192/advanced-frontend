import { useState } from "react"
import { ClassNames } from "shared/lib/ClassNames"
import cls from './SideBar.module.scss';
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false)
    const {t} = useTranslation('sideBar')

    const onToggle = () => {
        setCollapsed(!collapsed)
    }
    
    return (
        <div className={ClassNames(cls.SideBar, {[cls.collapsed]: collapsed})}>
            <button onClick={onToggle}>
                {t('Свернуть')}
            </button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
}