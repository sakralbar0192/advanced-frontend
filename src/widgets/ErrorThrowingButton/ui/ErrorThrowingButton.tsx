import { useState, type FC, useEffect } from 'react'
import { Button } from 'shared/ui/Button'

export const ErrorThrowingButton: FC = () => {
    const [error, setError] = useState(false)

    useEffect(() => {
        if (error) throw new Error('Error!')
    }, [error])

    const onThrow = (): void => {
        setError(true)
    }

    return (
        <Button
            onClick={onThrow}
        >
            Trow error
        </Button>
    )
}
