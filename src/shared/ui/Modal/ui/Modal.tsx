import { ClassNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { type ReactNode, type FC, useState, useRef, useEffect, useCallback } from 'react'
import { Portal } from 'shared/ui/Portal'

interface ModalProps {
    children?: ReactNode
    className?: string
    isOpen: boolean
    lazy?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 200

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        lazy = false,
        onClose
    } = props

    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback((): void => {
        if (onClose != null) {
            setIsClosing(true)
            timeoutRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDownHandler = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDownHandler)
        }

        return () => {
            clearTimeout(timeoutRef.current)
            window.removeEventListener('keydown', onKeyDownHandler)
        }
    }, [isOpen, onKeyDownHandler])

    useEffect(() => {
        setIsMounted(isOpen)
    }, [isOpen])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    const contentClickHandler = (e: React.MouseEvent): void => {
        e.stopPropagation()
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={ClassNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={contentClickHandler}>
                        { children }
                    </div>
                </div>
            </div>
        </Portal>
    )
}
