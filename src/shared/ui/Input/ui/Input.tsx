import { type InputHTMLAttributes, memo, type NamedExoticComponent, useEffect, useRef, useState } from 'react'
import classes from './Input.module.scss'
import { type DefaultTFuncReturn } from 'i18next'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    placeholder?: DefaultTFuncReturn | string | undefined
    autofocus?: boolean
    onChange?: (value: string) => void
}

export const Input: NamedExoticComponent<InputProps> = memo(function Input(props: InputProps) {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus = false,
        ...otherProps
    } = props

    const ref = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autofocus])

    const onBlur = (): void => {
        setIsFocused(false)
    }

    const onFocus = (): void => {
        setIsFocused(true)
    }

    const onSelect = (e: any): void => {
        const value = e?.target?.selectionStart as number
        setCaretPosition((!Number.isNaN(value)) ? value : 0)
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }
    return (
        <div className={classes.InputWrapper}>
            {Boolean(placeholder) && (
                <div className={classes.placeholder}>
                    {placeholder} {'>'}
                </div>
            )}
            <div className={classes.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    className={classes.input}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        style={{ left: `${caretPosition * 9}px` }}
                        className={classes.caret}
                    ></span>
                )}
            </div>
        </div>
    )
})
