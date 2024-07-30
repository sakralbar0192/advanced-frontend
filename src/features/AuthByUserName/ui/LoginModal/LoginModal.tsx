import { type FC } from 'react'
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal lazy={true} isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </Modal>
    )
}
