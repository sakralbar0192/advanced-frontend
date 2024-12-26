import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button'
import cl from './LoginForm.module.scss'
import { Input } from 'shared/ui/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducerList = {
    loginForm: loginReducer
}

export default memo(function LoginForm() {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

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
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
            <div className={cl.loginForm}>
                <Text title={t('Форма авторизации')} />
                {error !== '' && <Text text={t('Неправильный логин или пароль')} theme={TextTheme.ERROR} />}
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
        </DynamicModuleLoader>
    )
})
