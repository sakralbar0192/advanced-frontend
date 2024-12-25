import { ClassNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useCallback, useState, type FC } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUserName'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

export const Navbar: FC = () => {
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)
    const { t } = useTranslation('navBar')
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onOpenModal = (): void => {
        setIsOpenAuthModal(true)
    }

    const onCloseModal = (): void => {
        setIsOpenAuthModal(false)
    }

    const onLogout = useCallback((): void => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData != null) {
        return (
            <div className={ClassNames(cls.Navbar)}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.authButton}
                    onClick={onLogout}
                >{t('Выйти')}</Button>
            </div>
        )
    }

    return (
        <div className={ClassNames(cls.Navbar)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.authButton}
                onClick={onOpenModal}
            >{t('Войти')}</Button>
            {isOpenAuthModal && (<LoginModal isOpen={isOpenAuthModal} onClose={onCloseModal} />)}
        </div>
    )
}
