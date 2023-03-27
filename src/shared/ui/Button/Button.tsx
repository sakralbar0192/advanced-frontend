import { type ButtonHTMLAttributes, type FC } from 'react'
import cls from './Button.module.scss'
import { ClassNames } from 'shared/lib/ClassNames'

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className: string
    theme: ButtonTheme
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { className, children, theme, ...otherProps } = props
    return (
        <button type="button" className={ClassNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    )
}
