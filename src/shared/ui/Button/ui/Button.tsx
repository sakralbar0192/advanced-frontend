import { type ButtonHTMLAttributes, type FC } from 'react'
import cls from './Button.module.scss'
import { ClassNames } from 'shared/lib/classNames/classNames'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (
    props
) => {
    const {
        className = '',
        children,
        theme = ButtonTheme.CLEAR,
        square = false,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props

    const mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled
    }
    return (
        <button
            type="button"
            disabled={disabled}
            className={
                ClassNames(
                    cls.Button,
                    mods,
                    [className]
                )
            }
            {...otherProps}
        >
            {children}
        </button>
    )
}
