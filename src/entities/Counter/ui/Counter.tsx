import { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'

export const Counter: FC = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const { t } = useTranslation()

    const increment = (): void => {
        dispatch(counterActions.incremented())
    }

    const decrement = (): void => {
        dispatch(counterActions.decremented())
    }

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                data-testid="increment-button"
                onClick={increment}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-button"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    )
}
