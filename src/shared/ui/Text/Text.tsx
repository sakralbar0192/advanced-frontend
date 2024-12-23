import { ClassNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { type FC } from 'react'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

export const Text: FC<TextProps> = ({ className, text, title, theme = TextTheme.PRIMARY }) => {
    const mods = {
        [cls[theme]]: true
    }
    return (
        <div className={ClassNames(cls.Text, mods, [className])}>
            {title != null && <p className={cls.title}>{title}</p>}
            {text != null && <p className={cls.text}>{text}</p>}
        </div>
    )
}
