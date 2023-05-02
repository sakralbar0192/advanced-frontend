import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button'

export const LanguageSwitcher = (): ReactElement => {
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
            {t('Перевод')}
        </Button>
    )
}
