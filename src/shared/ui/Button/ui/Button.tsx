import { type ButtonHTMLAttributes, type FC } from 'react'
import cls from './Button.module.scss'
import { ClassNames } from 'shared/lib/classNames/classNames'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    let { className, children, theme, ...otherProps } = props
    if (theme === undefined) theme = ButtonTheme.CLEAR
    if (className === undefined) className = ''
    return (
        <button type="button" className={ClassNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    )
}
