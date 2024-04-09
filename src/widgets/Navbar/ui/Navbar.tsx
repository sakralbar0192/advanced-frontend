import { ClassNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useState, type FC } from 'react'
import { Modal } from 'shared/ui/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'

export const Navbar: FC = () => {
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)
    const { t } = useTranslation('navBar')

    const onToggleModal = (): void => {
        setIsOpenAuthModal((state) => !state)
    }

    return (
        <div className={ClassNames(cls.Navbar)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.authButton}
                onClick={onToggleModal}
            >{t('Войти')}</Button>
            <Modal isOpen={isOpenAuthModal} onClose={() => { setIsOpenAuthModal(false) }}>
                dfsdfa fsd fdsf sdf sdg gh afdhgfdh dfsgdgsdafsdaafsdfsdds ds fsdf sdfeaw gahf gasdfsfg adgasdgdv
            </Modal>
        </div>
    )
}
