import { ClassNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useState, type FC } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUserName'

export const Navbar: FC = () => {
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)
    const { t } = useTranslation('navBar')

    const onOpenModal = (): void => {
        setIsOpenAuthModal(true)
    }

    const onCloseModal = (): void => {
        setIsOpenAuthModal(false)
    }

    return (
        <div className={ClassNames(cls.Navbar)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.authButton}
                onClick={onOpenModal}
            >{t('Войти')}</Button>
            <LoginModal isOpen={isOpenAuthModal} onClose={onCloseModal} />
        </div>
    )
}
