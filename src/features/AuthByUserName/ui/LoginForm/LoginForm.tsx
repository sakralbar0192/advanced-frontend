import { memo, useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button'
import cl from './LoginForm.module.scss'
import { Input } from 'shared/ui/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName'
import { Text, TextTheme } from 'shared/ui/Text/Text'

export const LoginForm: FC = memo(function LoginForm() {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback((username: string) => {
        dispatch(loginActions.setUserName(username))
    }, [dispatch])

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch<any>(loginByUserName({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={cl.loginForm}>
            <Text title={t('Форма авторизации')} />
            {error != null && <Text text={t('Неправильный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                autofocus={true}
                placeholder={t('Введите логин')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cl.button}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})
