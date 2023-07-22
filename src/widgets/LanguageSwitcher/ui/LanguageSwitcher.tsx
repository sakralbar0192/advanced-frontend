import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button'

interface LanguageSwitcherProps {
    short?: boolean
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ short = false }) => {
    const { t, i18n } = useTranslation()

    const toggle = (): void => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className=''
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
        >
            {t(short ? 'Короткий перевод' : 'Перевод')}
        </Button>
    )
}
