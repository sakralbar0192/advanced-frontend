import { type ButtonHTMLAttributes, type FC } from 'react'
import cls from './Button.module.scss'
import { ClassNames } from 'shared/lib/classNames/classNames'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
}

export const Button: FC<ButtonProps> = (
    props
) => {
    const {
        className,
        children,
        theme,
        square,
        ...otherProps
    } = props

    const mods = {
        [cls[theme ?? ButtonTheme.CLEAR]]: true,
        [cls.square]: square
    }
    return (
        <button
            type="button"
            className={
                ClassNames(
                    cls.Button,
                    mods,
                    [className ?? '']
                )
            }
            {...otherProps}
        >
            {children}
        </button>
    )
}
