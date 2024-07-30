import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button'
import cl from './LoginForm.module.scss'
import { Input } from 'shared/ui/Input'

export const LoginForm: FC = () => {
    const { t } = useTranslation()
    return (
        <div className={cl.loginForm}>
            <Input autofocus={true} placeholder={t('Введите логин')} />
            <Input placeholder={t('Введите пароль')} />
            <Button
                className={cl.button}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    )
}
